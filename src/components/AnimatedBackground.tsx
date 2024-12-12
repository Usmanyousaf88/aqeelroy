import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#8B5CF6',
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    // Create mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Position camera
    camera.position.z = 2;

    // Scroll animation
    let currentSection = 0;
    const animateOnScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      currentSection = Math.floor(scrollPercent * 4); // 4 different sections

      // Change animation based on section
      switch(currentSection) {
        case 0:
          particlesMaterial.color.setHex(0x8B5CF6); // Purple
          break;
        case 1:
          particlesMaterial.color.setHex(0x4F46E5); // Indigo
          break;
        case 2:
          particlesMaterial.color.setHex(0x2563EB); // Blue
          break;
        case 3:
          particlesMaterial.color.setHex(0xD6BCFA); // Light purple
          break;
      }
    };

    window.addEventListener('scroll', animateOnScroll);

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const animateParticles = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    window.addEventListener('mousemove', animateParticles);

    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y = mouseX * 0.0001;
      particlesMesh.rotation.x = mouseY * 0.0001;
      particlesMesh.rotation.z += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', animateParticles);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};