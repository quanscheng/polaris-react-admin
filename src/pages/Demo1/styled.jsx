import styled from "styled-components";

export const QuoteItem = styled.div`
  // styled components
  width: 200px;
  border: 1px solid grey;
  margin-bottom: ${(props) => props.grid}px;
  background-color: lightblue;
  padding: ${(props) => props.grid}px;
`;
export const ItemWrap = styled.div`
  display: flex;
`;

export const ItemHandle = styled.div`
  width: 50px;
  border: 1px solid grey;
  margin-bottom: ${(props) => props.grid}px;
  background-color: lightblue;
  padding: ${(props) => props.grid}px;
`;
