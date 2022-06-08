import { Avatar, Caption, Card, Layout, Page, Stack, TextStyle } from "@shopify/polaris";
import React, { useEffect, useState } from "react";
import { TimelineBox, TimelineDot } from "./styled";

import { CollectCard } from "@/components/CollectCard";
import { KeepAlive } from "@/components/KeepAlive";
import { Timeline } from "antd";
import { useKeepAlive } from "@/hooks/useKeepAlive";
import { useTabs } from "@/hooks/useTabs";

const Home = () => {
  const { TabJSX, tabIndex } = useTabs({ titles: ["tab1", "tab2", "tab3"] });
  const [isAlive1, setIsAlive1] = useState(true);
  const [isAlive2, setIsAlive2] = useState(false);
  const [isAlive3, setIsAlive3] = useState(false);

  const { keep } = useKeepAlive([setIsAlive1, setIsAlive2, setIsAlive3]);

  useEffect(() => {
    console.log("tabIndex: ", tabIndex);
    switch (tabIndex) {
      case 0:
        keep(setIsAlive1, true);
        break;
      case 1:
        keep(setIsAlive2, true);
        break;
      case 2:
        keep(setIsAlive3, true);
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [tabIndex]);
  return (
    <Page title="KeepAlive组件化实现">
      <Layout>
        <Layout.Section>
          {TabJSX}
          <KeepAlive show={isAlive1}>
            <Card1 />
          </KeepAlive>
          <KeepAlive show={isAlive2}>
            <Card2 />
          </KeepAlive>
          <KeepAlive show={isAlive3}>
            <Card3 />
          </KeepAlive>
        </Layout.Section>
        <Layout.Section secondary>
          <CollectCard title="Timeline">
            <Card.Section>
              <Timeline>
                <TimelineBox>
                  <Timeline.Item dot={<TimelineDot />}>
                    <TextStyle variation="strong">
                      Hongyuan &nbsp;<TextStyle variation="subdued">2022-06-07</TextStyle>
                      <Caption>
                        asd q a das asas asd dasd 阿萨德asd asd sd q a das asas asd das
                      </Caption>
                    </TextStyle>
                  </Timeline.Item>
                </TimelineBox>
              </Timeline>
            </Card.Section>
          </CollectCard>
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
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Home;

function Card1() {
  useEffect(() => {
    console.log("card 1 mount");
    return () => {
      console.log("card 1 unmount");
    };
  }, []);
  return (
    <Card sectioned title="demo1-card-1">
      hello polaris
    </Card>
  );
}
function Card2() {
  useEffect(() => {
    console.log("card 22 mount");
    return () => {
      console.log("card 22 unmount");
    };
  }, []);
  return (
    <Card sectioned title="demo1-card-22">
      hello polaris hello polaris
    </Card>
  );
}
function Card3() {
  useEffect(() => {
    console.log("card 333 mount");
    return () => {
      console.log("card 333 unmount");
    };
  }, []);
  return (
    <Card sectioned title="demo1-card-333">
      hello polaris hello polaris hello polaris
    </Card>
  );
}
