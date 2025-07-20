import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-all duration-300"
        style={{
          left: position.x - 8,
          top: position.y - 8,
          transform: isHovering ? 'scale(2)' : 'scale(1)',
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full opacity-80" />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] transition-all duration-500"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      >
        <div className="w-10 h-10 border border-cyan-400 rounded-full opacity-30" />
      </div>
    </>
  );
};

export default CustomCursor;