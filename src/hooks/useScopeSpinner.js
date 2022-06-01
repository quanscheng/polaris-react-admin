import React from "react";
import { Spinner } from "@shopify/polaris";
import styled from "styled-components";
import { useState } from "react";

const SpinnerWrap = styled.div`
  display: ${(props) => (props.isLoading ? "block" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.8);
`;
const Position = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// 局部的 Spinner, 使用只需要在内容区外层包一个div/带有 position: relative 的组件
export const useScopeSpinner = () => {
  const [showSpinner, setShowSpinner] = useState(false);

  const ScopeSpinner = (
    <SpinnerWrap isLoading={showSpinner}>
      <Position>
        <Spinner accessibilityLabel="Spinner" size="large" />
      </Position>
    </SpinnerWrap>
  );

  return { ScopeSpinner, setShowSpinner };
};
