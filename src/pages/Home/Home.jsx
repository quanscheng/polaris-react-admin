import {
  Card,
  Heading,
  Icon,
  Page,
  ResourceItem,
  Stack,
  Thumbnail,
  Tooltip,
} from "@shopify/polaris";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import React, { useCallback, useState } from "react";

import { DragHandleMinor } from "@shopify/polaris-icons";

const ITEMS = [
  {
    id: "1",
    title: "Example list item",
  },
  {
    id: "2",
    title: "Example list item",
  },
  {
    id: "3",
    title: "Example list item",
  },
  {
    id: "4",
    title: "Example list item",
  },
  {
    id: "5",
    title: "Example list item",
  },
];
const Home = () => {
  return (
    <Page title="Home">
      <Card sectioned>
        <List />
      </Card>
    </Page>
  );
};

export default Home;

function List() {
  const [items, setItems] = useState(ITEMS);

  const handleDragEnd = useCallback(({ source, destination }) => {
    setItems((oldItems) => {
      const newItems = oldItems.slice(); // Duplicate
      const [temp] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, temp);
      return newItems;
    });
  }, []);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="root">
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {items.map((item, index) => (
                <ListItem key={item.id} id={item.id} index={index} title={item.title} />
              ))}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}

function ListItem(props) {
  const { id, index, title } = props;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            style={
              snapshot.isDragging
                ? { background: "white", ...provided.draggableProps.style }
                : provided.draggableProps.style
            }
          >
            <ResourceItem id={id} url="https://github.com/qw-in">
              <Stack alignment="center">
                <div {...provided.dragHandleProps}>
                  <Tooltip content="Drag to reorder list items">
                    <Icon source={DragHandleMinor} color="inkLightest" />
                  </Tooltip>
                </div>
                <Thumbnail source={`https://picsum.photos/id/${100 + id}/60/60`} alt={""} />
                <Heading>{title}</Heading>
              </Stack>
            </ResourceItem>
          </div>
        );
      }}
    </Draggable>
  );
}
