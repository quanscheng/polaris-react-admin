import React from "react";
import styled from "styled-components";

const KeepBox = styled.div`
  display: ${(props) => (props.alive ? "block" : "none")};
`;

export const KeepAlive = ({ children, alive }) => {
  return <KeepBox alive={alive}>{children}</KeepBox>;
};
