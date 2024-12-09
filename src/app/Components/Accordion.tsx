// src/components/Accordion.tsx

import React, { useState } from "react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  accordionVariant?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  accordionVariant = "default",
  className = "",
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`accordion ${accordionVariant} ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => handleToggle(index)}
          >
            {item.title}
          </button>
          {activeIndex === index && (
            <div className="accordion-content">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};
