
import React from "react";

interface ToolBadgeProps {
  name: string;
  icon: React.ReactNode;
}

const ToolBadge: React.FC<ToolBadgeProps> = ({ name, icon }) => {
  return (
    <div className="flex items-center gap-2 border border-border bg-secondary/50 rounded-full px-4 py-2 hover:border-primary/50 transition-all duration-300">
      <span className="text-primary">{icon}</span>
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default ToolBadge;
