import React from "react";
import styled from "styled-components";

const KeepBox = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const KeepAlive = ({ children, show }) => {
  return <KeepBox show={show}>{children}</KeepBox>;
};
