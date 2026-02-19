import React from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = ({ children }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "droppable",
  });
  return (
    <div
      style={{
        color: `${isOver ? "green" : undefined}`,
      }}
      ref={setNodeRef}
    >
      {children}
    </div>
  );
};

export default Droppable;
