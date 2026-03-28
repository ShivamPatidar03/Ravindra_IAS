import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    let mouse = { x: null, y: null };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.alpha = Math.random() * 0.5 + 0.4; // Increased minimum alpha
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        
        // Add glow effect
        ctx.shadowBlur = this.size * 5;
        ctx.shadowColor = this.color;
        
        ctx.globalAlpha = this.alpha;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0; // Reset for performance
      }

      update() {
        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;

        // Bounce off walls
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Mouse Interactivity (Subtle Parallax)
        if (mouse.x !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            this.x -= dx / 50; // Subtle push away
            this.y -= dy / 50;
          }
        }

        this.draw();
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = window.innerWidth < 768 ? 60 : 180; // Increased density
      const colors = ['#ffffff', '#ffffff', '#D4AF37', '#D4AF37', '#ffffff'];

      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 3 + 1; // Larger particles
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let directionX = (Math.random() * 1.5) - 0.75;
        let directionY = (Math.random() * 1.5) - 0.75;
        let color = colors[Math.floor(Math.random() * colors.length)];

        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none bg-black block opacity-0 animate-fade-in duration-1000"
      style={{ opacity: 1, transition: 'opacity 1s ease' }}
    />
  );
};

export default ParticlesBackground;
