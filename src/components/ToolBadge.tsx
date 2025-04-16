
import React from "react";

interface ToolBadgeProps {
  name: string;
  icon: React.ReactNode;
}

const ToolBadge: React.FC<ToolBadgeProps> = ({ name, icon }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 rounded-full border border-border hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
      <span className="text-primary">{icon}</span>
      <span className="text-sm font-medium font-manrope">{name}</span>
    </div>
  );
};

export default ToolBadge;
