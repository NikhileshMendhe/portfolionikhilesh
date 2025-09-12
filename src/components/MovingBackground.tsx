import { useEffect, useState } from 'react';

interface MovingBox {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
}

const MovingBackground = () => {
  const [boxes, setBoxes] = useState<MovingBox[]>([]);

  useEffect(() => {
    // Generate initial boxes
    const initialBoxes: MovingBox[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      speed: Math.random() * 0.5 + 0.1,
      direction: Math.random() * 360,
    }));
    setBoxes(initialBoxes);

    // Animate boxes
    const animateBoxes = () => {
      setBoxes(prevBoxes =>
        prevBoxes.map(box => {
          let newX = box.x + Math.cos(box.direction) * box.speed;
          let newY = box.y + Math.sin(box.direction) * box.speed;
          let newDirection = box.direction;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newDirection = Math.PI - box.direction;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newDirection = -box.direction;
            newY = Math.max(0, Math.min(100, newY));
          }

          return {
            ...box,
            x: newX,
            y: newY,
            direction: newDirection,
          };
        })
      );
    };

    const interval = setInterval(animateBoxes, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {boxes.map(box => (
        <div
          key={box.id}
          className="absolute border border-primary/20 rounded-md transition-all duration-100"
          style={{
            left: `${box.x}%`,
            top: `${box.y}%`,
            width: `${box.size}px`,
            height: `${box.size}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default MovingBackground;