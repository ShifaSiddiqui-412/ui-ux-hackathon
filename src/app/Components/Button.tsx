// src/components/Button/Button.tsx

import React from "react";

interface ButtonProps {
  color: "primary" | "secondary";
  size: "small" | "medium" | "large";
  text: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ color, size, text, onClick }) => {
  const buttonClass = `btn ${color} ${size}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};
