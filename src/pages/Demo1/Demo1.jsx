import { Card, Page } from "@shopify/polaris";
import { ItemHandle, ItemWrap, QuoteItem } from "./styled";
import React, { useState } from "react";

import { DragDropContext } from "react-beautiful-dnd";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";

const grid = 8; // 样式参数

const initial = Array.from({ length: 10 }, (v, k) => k).map((k) => {
  return {
    id: `id-${k}`,
    content: `Quote ${k}`,
  };
});

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result; // 得到一个排序之后的全新数组
};

// 整个item 拖动:
// function Quote({ quote, index }) {
//   return (
//     <Draggable draggableId={quote.id} index={index}>
//       {(provided) => (
//         <QuoteItem
//           grid={grid}
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//         >
//           {quote.content}
//         </QuoteItem>
//       )}
//     </Draggable>
//   );
// }
// 拖动 ItemHandle 的效果

// 每一个可拖动单元的复用组件
function Quote({ quote, index }) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {(provided) => (
        <ItemWrap ref={provided.innerRef} {...provided.draggableProps}>
          <QuoteItem grid={grid}>{quote.content}</QuoteItem>
          <ItemHandle grid={grid} {...provided.dragHandleProps} />
        </ItemWrap>
      )}
    </Draggable>
  );
}

// 可拖动的表格
const QuoteList = React.memo(({ quotes }) => {
  return quotes.map((quote, index) => <Quote quote={quote} index={index} key={quote.id} />);
});

// 拖动上下文组件
function QuoteApp() {
  const [state, setState] = useState({ quotes: initial });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(state.quotes, result.source.index, result.destination.index);

    setState({ quotes });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <QuoteList quotes={state.quotes} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

// 就是个名字罢了
const Demo1 = () => {
  return (
    <Page title="react beautiful dnd">
      <Card sectioned>
        <QuoteApp />
      </Card>
    </Page>
  );
};

export default Demo1;
