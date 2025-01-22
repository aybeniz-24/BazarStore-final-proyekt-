import React, { useEffect, useState } from 'react';
import { FaSnowflake } from "react-icons/fa";

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 50; i++) {
        flakes.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 15 + 5,
          speedY: Math.random() * 2 + 1,
          speedX: Math.random() * 2 - 1,
        });
      }
      setSnowflakes(flakes);
    };

    createSnowflakes();

    const moveSnowflakes = () => {
      setSnowflakes((prevFlakes) =>
        prevFlakes.map((flake) => ({
          ...flake,
          x: flake.x + flake.speedX,
          y: flake.y + flake.speedY > window.innerHeight
            ? 0
            : flake.y + flake.speedY,
        }))
      );
    };

    const interval = setInterval(moveSnowflakes, 50);

    window.addEventListener("resize", createSnowflakes);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", createSnowflakes);
    };
  }, []);

  return (
    <>
      {snowflakes.map((flake) => (
        <FaSnowflake
          key={flake.id}
          style={{
            position: "fixed",
            top: flake.y,
            left: flake.x,
            fontSize: `${flake.size}px`,
            zIndex: 9999,
            color: "rgba(255, 255, 255, 0.8)",
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
};

export default Snowfall;
