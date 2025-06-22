import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './ThreeWireframeGlobe.css';

interface Particle {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
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
    camera.position.z = 5;

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
      
      // Position on globe surface
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const radius = 2.1;
      
      mesh.position.x = radius * Math.sin(theta) * Math.cos(phi);
      mesh.position.y = radius * Math.sin(theta) * Math.sin(phi);
      mesh.position.z = radius * Math.cos(theta);
      
      scene.add(mesh);
      
      return {
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          Math.random() * 0.03 + 0.01, // Upward movement
          (Math.random() - 0.5) * 0.02
        ),
        life: 0,
        maxLife: 200 + Math.random() * 100
      };
    };

    // Initialize particles
    for (let i = 0; i < 15; i++) {
      particlesRef.current.push(createParticle());
    }

    // Animation loop
    const animate = () => {
      if (!scene || !renderer || !globe) return;

      // Rotate globe
      globe.rotation.y += 0.005;
      globe.rotation.x += 0.002;

      // Update particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        
        // Update position
        particle.mesh.position.add(particle.velocity);
        
        // Apply physics
        particle.velocity.y -= 0.0005; // Slight gravity
        
        // Add outward drift
        const direction = particle.mesh.position.clone().normalize();
        particle.velocity.add(direction.multiplyScalar(0.0002));
        
        // Update opacity
        const alpha = Math.max(0, 1 - (particle.life / particle.maxLife));
        (particle.mesh.material as THREE.MeshBasicMaterial).opacity = alpha;
        
        // Remove expired particles
        if (particle.life >= particle.maxLife) {
          scene.remove(particle.mesh);
          return false;
        }
        
        return true;
      });

      // Add new particles
      if (Math.random() < 0.03 && particlesRef.current.length < 25) {
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
