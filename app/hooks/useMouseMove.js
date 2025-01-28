import { useState } from 'react';

export const useMouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return {
    position,
    handleMouseMove,
    style: {
      '--mouse-x': `${position.x}px`,
      '--mouse-y': `${position.y}px`
    }
  };
};