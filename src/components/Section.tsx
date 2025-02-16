import React from "react";

interface SectionProps {
  title: string;
  desc?: string;
  children: React.ReactNode;
}
const Section = ({ title, desc, children }: SectionProps) => {
  return (
    <div className="py-2">
      <div className="py-4">
        <h1 className="font-[700] text-2xl mb-1">{title}</h1>
        <div className="text-gray-600">{desc}</div>
      </div>
      {children}
    </div>
  );
};

export default Section;
