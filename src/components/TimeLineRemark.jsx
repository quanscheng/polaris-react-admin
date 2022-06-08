import { Caption, Card, TextStyle } from "@shopify/polaris";
import { TimelineBox, TimelineDot } from "@/pages/Home/styled";

import { CollectCard } from "./CollectCard";
import React from "react";
import { Timeline } from "antd";

export const TimeLineRemark = () => {
  return (
    <CollectCard title="Timeline">
      <Card.Section>
        <Timeline>
          <TimelineBox>
            <Timeline.Item dot={<TimelineDot />}>
              <TextStyle variation="strong">
                Hongyuan &nbsp;<TextStyle variation="subdued">2022-06-07</TextStyle>
                <Caption>asd q a das asas asd dasd 阿萨德asd asd sd q a das asas asd das</Caption>
              </TextStyle>
            </Timeline.Item>
          </TimelineBox>
        </Timeline>
      </Card.Section>
    </CollectCard>
  );
};
