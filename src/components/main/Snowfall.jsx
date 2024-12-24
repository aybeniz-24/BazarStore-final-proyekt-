import React, { useEffect, useState } from 'react';
import { FaSnowflake } from "react-icons/fa";

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes = [];
      for (let i = 0; i < 50; i++) { // Qar dənəciklərinin sayı
        flakes.push({
          id: i,
          x: Math.random() * window.innerWidth, // Yatay mövqe
          y: Math.random() * window.innerHeight, // Şaquli mövqe
          size: Math.random() * 20 + 10, // Ölçü
          speedY: Math.random() * 3 + 2, // Şaquli sürət
          speedX: Math.random() * 2 - 1, // Yatay sürət
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
            : flake.y + flake.speedY, // Ekrandan çıxdıqda təkrar
        }))
      );
    };

    const interval = setInterval(moveSnowflakes, 50);

    // Yenidən ölçüləndə qar dənəciklərini tənzimlə
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
            color: "rgba(255, 255, 255, 0.8)", // Rəng və şəffaflıq
            pointerEvents: "none", // Klik etməyi bloklamaq üçün
          }}
        />
      ))}
    </>
  );
};

export default Snowfall;
