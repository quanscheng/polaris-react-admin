import styled from "styled-components";

export const TimelineBox = styled.div`
  > li:last-of-type {
    padding: 0px;
  }
`;

export const TimelineDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: rgba(0, 160, 172, 1);
  border-radius: 50%;
`;

export const AntTabs = styled.div`
  /* 去除下边框 */
  > .ant-tabs .ant-tabs-nav::before {
    border: none;
  }
  /* 选中和未选中的 tab.pane 样式 */
  > .ant-tabs .ant-tabs-nav .ant-tabs-nav-wrap .ant-tabs-nav-list {
    .ant-tabs-tab-active,
    .ant-tabs-tab {
      border-radius: 8px;
    }
    /* 选中的 tab.pane 样式 */
    .ant-tabs-tab-active {
      font-weight: bold;
    }
  }
`;
