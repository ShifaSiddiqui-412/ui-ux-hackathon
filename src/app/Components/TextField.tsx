// src/components/TextField/TextField.tsx

import React from "react";

interface TextFieldProps {
  placeholder: string;
  className?: string;
}

export const TextField: React.FC<TextFieldProps> = ({ placeholder, className = "" }) => {
  return <input type="text" className={`text-field ${className}`} placeholder={placeholder} />;
};
