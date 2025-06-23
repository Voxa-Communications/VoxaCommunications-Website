import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeWireframeGlobe.css';

interface Particle {
  mesh: THREE.Mesh;
  startPos: THREE.Vector3;
  endPos: THREE.Vector3;
  controlPoint: THREE.Vector3;
  life: number;
  maxLife: number;
  trail: THREE.Vector3[];
  trailMesh?: THREE.Line;
}

export const WireframeGlobe: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeRef = useRef<THREE.Object3D | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current; // Store reference for cleanup

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-3, 0, 5); // Move camera to show globe on the right

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Create wireframe globe
    const createGlobe = () => {
      const globeGroup = new THREE.Group();
      
      // Main sphere wireframe
      const sphereGeometry = new THREE.SphereGeometry(2, 32, 16);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      globeGroup.add(sphere);

      // Add latitude lines
      for (let i = 0; i < 8; i++) {
        const lat = (i / 8) * Math.PI - Math.PI / 2;
        const radius = Math.cos(lat) * 2;
        const y = Math.sin(lat) * 2;
        
        const circleGeometry = new THREE.RingGeometry(radius - 0.01, radius + 0.01, 64);
        const circleMaterial = new THREE.MeshBasicMaterial({
          color: 0x00e5ff,
          transparent: true,
          opacity: 0.4,
          side: THREE.DoubleSide
        });
        const circle = new THREE.Mesh(circleGeometry, circleMaterial);
        circle.position.y = y;
        circle.rotation.x = Math.PI / 2;
        globeGroup.add(circle);
      }

      // Add connection points
      const pointsGeometry = new THREE.BufferGeometry();
      const pointsPositions = [];
      const pointsColors = [];
      
      for (let i = 0; i < 200; i++) {
        const phi = Math.acos(-1 + (2 * i) / 200);
        const theta = Math.sqrt(200 * Math.PI) * phi;
        
        const x = 2 * Math.cos(theta) * Math.sin(phi);
        const y = 2 * Math.sin(theta) * Math.sin(phi);
        const z = 2 * Math.cos(phi);
        
        pointsPositions.push(x, y, z);
        pointsColors.push(0, 0.9, 1); // Cyan color
      }
      
      pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(pointsPositions, 3));
      pointsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(pointsColors, 3));
      
      const pointsMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });
      
      const points = new THREE.Points(pointsGeometry, pointsMaterial);
      globeGroup.add(points);

      return globeGroup;
    };

    const globe = createGlobe();
    globeRef.current = globe;
    scene.add(globe);

    // Create particle system
    const createParticle = (): Particle => {
      const geometry = new THREE.SphereGeometry(0.02, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00bcd4,
        transparent: true,
        opacity: 1
      });
      const mesh = new THREE.Mesh(geometry, material);
      
      // Generate random start and end points on globe surface
      const radius = 2.1;
      
      // Start position
      const startPhi = Math.random() * Math.PI * 2;
      const startTheta = Math.random() * Math.PI;
      const startPos = new THREE.Vector3(
        radius * Math.sin(startTheta) * Math.cos(startPhi),
        radius * Math.sin(startTheta) * Math.sin(startPhi),
        radius * Math.cos(startTheta)
      );
      
      // End position (ensure it's reasonably far from start)
      let endPhi, endTheta, endPos;
      do {
        endPhi = Math.random() * Math.PI * 2;
        endTheta = Math.random() * Math.PI;
        endPos = new THREE.Vector3(
          radius * Math.sin(endTheta) * Math.cos(endPhi),
          radius * Math.sin(endTheta) * Math.sin(endPhi),
          radius * Math.cos(endTheta)
        );
      } while (startPos.distanceTo(endPos) < 2); // Ensure minimum distance
      
      // Calculate control point for arc (higher above the surface)
      const midPoint = startPos.clone().add(endPos).multiplyScalar(0.5);
      const arcHeight = 1.5 + Math.random() * 1; // Random height between 1.5-2.5
      const controlPoint = midPoint.normalize().multiplyScalar(radius + arcHeight);
      
      // Set initial position
      mesh.position.copy(startPos);
      scene.add(mesh);
      
      // Create trail geometry
      const trailGeometry = new THREE.BufferGeometry();
      const trailMaterial = new THREE.LineBasicMaterial({
        color: 0x00bcd4,
        transparent: true,
        opacity: 0.6
      });
      const trailMesh = new THREE.Line(trailGeometry, trailMaterial);
      scene.add(trailMesh);
      
      return {
        mesh,
        startPos: startPos.clone(),
        endPos: endPos.clone(),
        controlPoint: controlPoint.clone(),
        life: 0,
        maxLife: 120 + Math.random() * 60,
        trail: [],
        trailMesh
      };
    };

    // Initialize particles
    for (let i = 0; i < 8; i++) {
      particlesRef.current.push(createParticle());
    }

    // Animation loop
    const animate = () => {
      if (!scene || !renderer || !globe) return;

      // Rotate globe (slower)
      globe.rotation.y += 0.002;
      globe.rotation.x += 0.001;

      // Update particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        
        // Calculate progress along the arc (0 to 1)
        const progress = particle.life / particle.maxLife;
        
        if (progress <= 1) {
          // Quadratic Bezier curve interpolation
          const t = progress;
          const oneMinusT = 1 - t;
          
          const newPos = new THREE.Vector3()
            .addScaledVector(particle.startPos, oneMinusT * oneMinusT)
            .addScaledVector(particle.controlPoint, 2 * oneMinusT * t)
            .addScaledVector(particle.endPos, t * t);
          
          particle.mesh.position.copy(newPos);
          
          // Add current position to trail
          particle.trail.push(newPos.clone());
          
          // Limit trail length
          if (particle.trail.length > 20) {
            particle.trail.shift();
          }
          
          // Update trail mesh
          if (particle.trailMesh && particle.trail.length > 1) {
            const positions = new Float32Array(particle.trail.length * 3);
            particle.trail.forEach((pos, i) => {
              positions[i * 3] = pos.x;
              positions[i * 3 + 1] = pos.y;
              positions[i * 3 + 2] = pos.z;
            });
            
            particle.trailMesh.geometry.setAttribute('position', 
              new THREE.BufferAttribute(positions, 3));
            particle.trailMesh.geometry.attributes.position.needsUpdate = true;
            
            // Fade trail opacity based on particle life
            const trailOpacity = Math.max(0, 0.8 * (1 - progress));
            (particle.trailMesh.material as THREE.LineBasicMaterial).opacity = trailOpacity;
          }
          
          // Update particle opacity
          const alpha = Math.max(0, 1 - progress);
          (particle.mesh.material as THREE.MeshBasicMaterial).opacity = alpha;
        }
        
        // Remove expired particles
        if (particle.life >= particle.maxLife) {
          scene.remove(particle.mesh);
          if (particle.trailMesh) {
            scene.remove(particle.trailMesh);
          }
          return false;
        }
        
        return true;
      });

      // Add new particles
      if (Math.random() < 0.02 && particlesRef.current.length < 15) {
        particlesRef.current.push(createParticle());
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (container && renderer) {
        container.removeChild(renderer.domElement);
      }
      
      // Clean up particles
      particlesRef.current.forEach(particle => {
        if (scene) {
          scene.remove(particle.mesh);
          if (particle.trailMesh) {
            scene.remove(particle.trailMesh);
          }
        }
      });
      
      renderer?.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="wireframe-globe-container"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    />
  );
};
