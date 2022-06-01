import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: props.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      item
    </div>
  );
}
