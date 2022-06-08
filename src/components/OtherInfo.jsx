import { Avatar, Card, Stack, TextStyle } from "@shopify/polaris";

import { CollectCard } from "./CollectCard";
import React from "react";

export const OtherInfo = () => {
  return (
    <CollectCard title="Other information">
      <Card.Section>
        <Stack distribution="fillEvenly">
          <Stack.Item>
            <TextStyle variation="subdued">Create by</TextStyle>
          </Stack.Item>
          <Stack.Item>
            <Stack spacing="extraTight">
              <Stack.Item>
                <Avatar size="extraSmall" />
              </Stack.Item>
              <Stack.Item>quansicheng</Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
        <div style={{ height: 16 }} />
        <Stack distribution="fillEvenly">
          <Stack.Item>
            <TextStyle variation="subdued">Create time</TextStyle>
          </Stack.Item>
          <Stack.Item>2021-08-22 12:45:44</Stack.Item>
        </Stack>
        <div style={{ height: 16 }} />
        <Stack distribution="fillEvenly">
          <Stack.Item>
            <TextStyle variation="subdued">update by</TextStyle>
          </Stack.Item>
          <Stack.Item>
            <Stack spacing="extraTight">
              <Stack.Item>
                <Avatar size="extraSmall" />
              </Stack.Item>
              <Stack.Item>quansicheng</Stack.Item>
            </Stack>
          </Stack.Item>
        </Stack>
        <div style={{ height: 16 }} />
        <Stack distribution="fillEvenly">
          <Stack.Item>
            <TextStyle variation="subdued">Update time</TextStyle>
          </Stack.Item>
          <Stack.Item>2021-08-22 12:45:44</Stack.Item>
        </Stack>
      </Card.Section>
    </CollectCard>
  );
};
