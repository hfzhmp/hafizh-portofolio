import React, { useEffect, useRef } from 'react';

interface EyesProps {
  variant?: 'hero' | 'navbar';
}

export const Eyes: React.FC<EyesProps> = ({ variant = 'hero' }) => {
  const leftEyeRef = useRef<HTMLDivElement>(null);
  const rightEyeRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isNavbar = variant === 'navbar';

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isIdle = false;
    let idleTimeout: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isIdle = false;
      
      clearTimeout(idleTimeout);
      idleTimeout = window.setTimeout(() => {
        isIdle = true;
      }, 2000); // 2 seconds of no movement = idle
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize idle timeout
    idleTimeout = window.setTimeout(() => {
      isIdle = true;
    }, 2000);
    
    let animationFrameId: number;
    
    // Lerp state for pupils
    const leftPupil = { currentX: 0, currentY: 0 };
    const rightPupil = { currentX: 0, currentY: 0 };
    
    const animate = () => {
      if (leftEyeRef.current && rightEyeRef.current && leftPupilRef.current && rightPupilRef.current) {
        
        const updatePupil = (
          eyeRef: React.RefObject<HTMLDivElement>, 
          pupilRef: React.RefObject<HTMLDivElement>, 
          state: {currentX: number, currentY: number}
        ) => {
          if (!eyeRef.current || !pupilRef.current) return;
          
          const eyeRect = eyeRef.current.getBoundingClientRect();
          const pupilRect = pupilRef.current.getBoundingClientRect();
          
          const eyeCenterX = eyeRect.left + eyeRect.width / 2;
          const eyeCenterY = eyeRect.top + eyeRect.height / 2;
          
          const dx = mouseX - eyeCenterX;
          const dy = mouseY - eyeCenterY;
          const angle = Math.atan2(dy, dx);
          
          const distance = Math.min(Math.hypot(dx, dy), 300);
          
          // Calculate dynamic max radius based on actual DOM elements
          const borderWidth = isNavbar ? 2 : 4; 
          const maxPupilRadius = (eyeRect.width / 2) - (pupilRect.width / 2) - borderWidth;
          
          // Reduce intensity if idle
          const idleMultiplier = isIdle ? 0.2 : 1;
          
          const moveRadius = Math.pow(distance / 300, 0.8) * maxPupilRadius * idleMultiplier;
          const clampedMoveRadius = Math.min(moveRadius, maxPupilRadius);
          
          const targetX = Math.cos(angle) * clampedMoveRadius;
          const targetY = Math.sin(angle) * clampedMoveRadius;
          
          state.currentX += (targetX - state.currentX) * 0.15;
          state.currentY += (targetY - state.currentY) * 0.15;
          
          pupilRef.current.style.transform = `translate(${state.currentX}px, ${state.currentY}px)`;
        };
        
        updatePupil(leftEyeRef, leftPupilRef, leftPupil);
        updatePupil(rightEyeRef, rightPupilRef, rightPupil);
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(idleTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isNavbar]);

  const gapClass = isNavbar ? 'gap-2' : 'gap-6 md:gap-8';
  const eyeSizeClass = isNavbar 
    ? 'w-8 h-8 md:w-10 md:h-10 border-2' 
    : 'w-20 h-20 md:w-28 md:h-28 border-[3px] md:border-[5px]';
  const pupilSizeClass = isNavbar 
    ? 'w-3 h-3 md:w-4 md:h-4' 
    : 'w-8 h-8 md:w-12 md:h-12';

  return (
    <div ref={containerRef} className={`flex ${gapClass}`}>
      {/* Left Eye */}
      <div 
        ref={leftEyeRef}
        className={`${eyeSizeClass} rounded-full flex items-center justify-center relative border-[#2c221c] dark:border-[#d5bdaf] bg-transparent`}
      >
        <div 
          ref={leftPupilRef}
          className={`${pupilSizeClass} bg-[#2c221c] dark:bg-[#d5bdaf] rounded-full absolute`}
        />
      </div>
      {/* Right Eye */}
      <div 
        ref={rightEyeRef}
        className={`${eyeSizeClass} rounded-full flex items-center justify-center relative border-[#2c221c] dark:border-[#d5bdaf] bg-transparent`}
      >
        <div 
          ref={rightPupilRef}
          className={`${pupilSizeClass} bg-[#2c221c] dark:bg-[#d5bdaf] rounded-full absolute`}
        />
      </div>
    </div>
  );
};
