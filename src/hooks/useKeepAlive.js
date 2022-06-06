import React from "react";
import styled from "styled-components";

const KeepBox = styled.div`
  display: ${(props) => (props.alive ? "block" : "none")};
`;

// export const KeepAlive = ({ children, alive }) => {
//   return <KeepBox alive={alive}>{children}</KeepBox>;
// };

export const useKeepAlive = (funcArray = []) => {
  const arrArr = funcArray.map((arr, i) => [i, arr]);
  const map = new Map(arrArr);

  const keep = (targetFunc, boolean) => {
    map.forEach((o, i) => map.get(i)(!boolean));
    targetFunc(boolean);
  };

  return { keep };
};
