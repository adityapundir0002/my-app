import React, { useEffect, useState } from "react";
import { APP_LOGO } from "../utils/constants";

const CursorLogo = () => {
  const [logoPosition, setLogoPosition] = useState({ x: 100, y: 100 });
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = (event) => {
    const { clientX, clientY, button } = event;

    setLogoPosition({ x: clientX, y: clientY });

    if (button === 0) {
      setIsRotated((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <img
      src={APP_LOGO}
      alt="App Logo"
      style={{
        position: "absolute",
        left: logoPosition.x,
        top: logoPosition.y,
        transform: `translate(-50%, -50%) ${
          isRotated ? "rotateY(180deg)" : "rotateY(0deg)"
        }`,
        width: "150px",
        height: "150px",
        transition: "left 12s ease, top 12s ease, transform 1s ease",
        pointerEvents: "none",
      }}
    />
  );
};

export default CursorLogo;
