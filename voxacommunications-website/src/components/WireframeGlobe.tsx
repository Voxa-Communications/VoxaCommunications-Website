import React, { useEffect, useRef } from 'react';
import './WireframeGlobe.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  maxLife: number;
}

export const WireframeGlobe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rotationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Update center and radius based on canvas size
    const getCenterAndRadius = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) / 6; // Make it responsive
      return { centerX, centerY, radius };
    };

    let { centerX, centerY, radius } = getCenterAndRadius();

    // Generate wireframe points for globe
    const generateGlobePoints = (r: number) => {
      const points: Array<{ x: number; y: number; z: number }> = [];
      
      // Latitude lines
      for (let lat = -90; lat <= 90; lat += 15) {
        for (let lng = 0; lng < 360; lng += 10) {
          const phi = (lat * Math.PI) / 180;
          const theta = (lng * Math.PI) / 180;
          
          points.push({
            x: r * Math.cos(phi) * Math.cos(theta),
            y: r * Math.sin(phi),
            z: r * Math.cos(phi) * Math.sin(theta)
          });
        }
      }

      // Longitude lines
      for (let lng = 0; lng < 360; lng += 15) {
        for (let lat = -90; lat <= 90; lat += 10) {
          const phi = (lat * Math.PI) / 180;
          const theta = (lng * Math.PI) / 180;
          
          points.push({
            x: r * Math.cos(phi) * Math.cos(theta),
            y: r * Math.sin(phi),
            z: r * Math.cos(phi) * Math.sin(theta)
          });
        }
      }

      return points;
    };

    let globePoints = generateGlobePoints(radius);

    // Create particles
    const createParticle = (): Particle => {
      const angle = Math.random() * Math.PI * 2;
      const elevation = (Math.random() - 0.5) * Math.PI * 0.8; // More concentrated around equator
      const startRadius = radius + Math.random() * 20;
      
      return {
        id: Math.random(),
        x: startRadius * Math.cos(elevation) * Math.cos(angle),
        y: startRadius * Math.sin(elevation),
        z: startRadius * Math.cos(elevation) * Math.sin(angle),
        vx: (Math.random() - 0.5) * 1.5,
        vy: Math.random() * -2 - 0.5, // Move upward more gently
        vz: (Math.random() - 0.5) * 1.5,
        life: 0,
        maxLife: 120 + Math.random() * 80 // Longer life for better visibility
      };
    };

    // Initialize particles
    for (let i = 0; i < 20; i++) {
      particlesRef.current.push(createParticle());
    }

    const animate = () => {
      // Update dimensions on each frame in case of resize
      const currentDimensions = getCenterAndRadius();
      centerX = currentDimensions.centerX;
      centerY = currentDimensions.centerY;
      
      // Only regenerate points if radius changed significantly
      if (Math.abs(currentDimensions.radius - radius) > 10) {
        radius = currentDimensions.radius;
        globePoints = generateGlobePoints(radius);
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      rotationRef.current += 0.01; // Slightly faster rotation

      // Draw wireframe globe with better visibility
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.6)';
      ctx.lineWidth = 1.5;
      
      // Draw latitude circles (horizontal)
      for (let lat = -75; lat <= 75; lat += 25) {
        ctx.beginPath();
        const phi = (lat * Math.PI) / 180;
        const circleRadius = radius * Math.cos(phi);
        const circleY = radius * Math.sin(phi);
        
        let firstPoint = true;
        for (let lng = 0; lng <= 360; lng += 5) {
          const theta = (lng * Math.PI) / 180;
          
          // 3D coordinates
          const x3d = circleRadius * Math.cos(theta + rotationRef.current);
          const y3d = circleY;
          const z3d = circleRadius * Math.sin(theta + rotationRef.current);
          
          // Only draw visible parts (front half of the sphere)
          if (z3d > -circleRadius * 0.1) {
            // Project to 2D with proper perspective
            const distance = 400;
            const scale = distance / (distance + z3d);
            const x2d = centerX + x3d * scale;
            const y2d = centerY + y3d * scale;
            
            if (firstPoint) {
              ctx.moveTo(x2d, y2d);
              firstPoint = false;
            } else {
              ctx.lineTo(x2d, y2d);
            }
          } else {
            firstPoint = true;
          }
        }
        ctx.stroke();
      }
      
      // Draw longitude lines (vertical)
      for (let lng = 0; lng < 360; lng += 20) {
        ctx.beginPath();
        const theta = (lng * Math.PI) / 180;
        
        let firstPoint = true;
        for (let lat = -90; lat <= 90; lat += 3) {
          const phi = (lat * Math.PI) / 180;
          
          // 3D coordinates
          const x3d = radius * Math.cos(phi) * Math.cos(theta + rotationRef.current);
          const y3d = radius * Math.sin(phi);
          const z3d = radius * Math.cos(phi) * Math.sin(theta + rotationRef.current);
          
          // Only draw visible parts
          if (z3d > -radius * 0.2) {
            // Project to 2D with proper perspective
            const distance = 400;
            const scale = distance / (distance + z3d);
            const x2d = centerX + x3d * scale;
            const y2d = centerY + y3d * scale;
            
            if (firstPoint) {
              ctx.moveTo(x2d, y2d);
              firstPoint = false;
            } else {
              ctx.lineTo(x2d, y2d);
            }
          } else {
            firstPoint = true;
          }
        }
        ctx.stroke();
      }

      // Draw connection points
      globePoints.forEach((point) => {
        const rotatedX = point.x * Math.cos(rotationRef.current) - point.z * Math.sin(rotationRef.current);
        const rotatedZ = point.x * Math.sin(rotationRef.current) + point.z * Math.cos(rotationRef.current);
        
        if (rotatedZ > -radius * 0.3) {
          const distance = 400;
          const scale = distance / (distance + rotatedZ);
          const x = centerX + rotatedX * scale;
          const y = centerY + point.y * scale;
          
          const dotAlpha = Math.max(0.2, 0.4 + (rotatedZ + radius) / (radius * 2) * 0.4);
          ctx.fillStyle = `rgba(0, 229, 255, ${dotAlpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;
        
        // Apply some physics - slight outward drift and upward movement
        particle.vy -= 0.01; // Gentler gravity effect
        // Add slight outward drift to simulate network expansion
        const particleDistance = Math.sqrt(particle.x * particle.x + particle.y * particle.y + particle.z * particle.z);
        if (particleDistance > 0) {
          const normalizeX = particle.x / particleDistance;
          const normalizeY = particle.y / particleDistance;
          const normalizeZ = particle.z / particleDistance;
          
          particle.vx += normalizeX * 0.005;
          particle.vy += normalizeY * 0.005;
          particle.vz += normalizeZ * 0.005;
        }
        
        // Rotate particle position
        const rotatedX = particle.x * Math.cos(rotationRef.current) - particle.z * Math.sin(rotationRef.current);
        const rotatedZ = particle.x * Math.sin(rotationRef.current) + particle.z * Math.cos(rotationRef.current);
        
        // Project to screen with consistent perspective
        const projectionDistance = 400;
        const scale = projectionDistance / (projectionDistance + rotatedZ);
        const screenX = centerX + rotatedX * scale;
        const screenY = centerY + particle.y * scale;
        
        // Draw particle
        const alpha = Math.max(0, 1 - (particle.life / particle.maxLife));
        const size = Math.max(0.5, 3 * alpha);
        
        if (alpha > 0.01) { // Only draw visible particles
          ctx.fillStyle = `rgba(0, 188, 212, ${alpha})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
          ctx.fill();
          
          // Add glow effect
          ctx.shadowColor = '#00bcd4';
          ctx.shadowBlur = 10;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
          ctx.beginPath();
          ctx.arc(screenX, screenY, Math.max(0.3, size * 0.5), 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        
        return particle.life < particle.maxLife;
      });

      // Add new particles periodically
      if (Math.random() < 0.05 && particlesRef.current.length < 30) {
        particlesRef.current.push(createParticle());
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="wireframe-globe-container">
      <canvas
        ref={canvasRef}
        className="wireframe-globe-canvas"
      />
    </div>
  );
};
