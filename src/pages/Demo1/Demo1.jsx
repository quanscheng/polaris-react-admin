import "./demo1.scss";

import { Avatar, Segmented } from "antd";
import { Button, Caption, Card, Layout, Page, Stack, TextStyle } from "@shopify/polaris";
import { ChevronDownMinor, ChevronUpMinor } from "@shopify/polaris-icons";
import React, { useState } from "react";

import { KeepAlive } from "@/components/KeepAlive";
import { useToggle } from "ahooks";

const SegmentedItem = ({ imgsrc = "", title = "", info = "" }) => {
  return (
    <div style={{ padding: "4px 0" }}>
      <Stack alignment="center">
        <Stack.Item>
          <Avatar
            size="large"
            src={imgsrc}
            // src="https://joeschmoe.io/api/v1/random"
            style={{ marginRight: -10 }}
          />
        </Stack.Item>
        <Stack.Item>
          <TextStyle>
            {title} <Caption>{info}</Caption>
          </TextStyle>
        </Stack.Item>
      </Stack>
    </div>
  );
};

const Demo1 = () => {
  const [changeDemo, { toggle }] = useToggle();
  const [options, setOptions] = useState([
    {
      label: (
        <SegmentedItem imgsrc="https://joeschmoe.io/api/v1/random" title="推特" info="张无忌" />
      ),
      value: "1",
    },
    {
      label: (
        <SegmentedItem imgsrc="https://joeschmoe.io/api/v1/random" title="脸书" info="张三丰" />
      ),
      value: "2",
    },
    {
      label: (
        <SegmentedItem
          imgsrc="https://joeschmoe.io/api/v1/random"
          title="instagram"
          info="user1 aplex"
        />
      ),
      value: "3",
    },
  ]);

  return (
    <Page title="demo 1">
      <Layout>
        <Layout.Section>
          <div className="custom_Segmented">
            <Segmented
              // block // fill效果
              options={options}
              onChange={(value) => {
                console.log("value: ", value);
              }}
            />
          </div>
          <Card
            title="title"
            actions={[
              {
                content: (
                  <Button
                    size="slim"
                    monochrome
                    plain
                    icon={changeDemo ? ChevronDownMinor : ChevronUpMinor}
                    onClick={toggle}
                  />
                ),
              },
            ]}
          >
            <KeepAlive show={changeDemo}>
              <Card.Section>内容区</Card.Section>
            </KeepAlive>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Demo1;
