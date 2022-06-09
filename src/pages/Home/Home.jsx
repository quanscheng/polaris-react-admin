import { Avatar as AntAvatar, ConfigProvider, Tabs } from "antd";
import { AntTabs, TimelineBox, TimelineDot } from "./styled";
import { Avatar, Caption, Card, Layout, Page, Stack, TextStyle } from "@shopify/polaris";
import React, { useEffect, useState } from "react";

import { CollectCard } from "@/components/CollectCard";
import { KeepAlive } from "@/components/KeepAlive";
import { OtherInfo } from "@/components/OtherInfo";
import { TimeLineRemark } from "@/components/TimeLineRemark";
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
          <br />
          <hr />
          <AntTabs>
            <Tabs
              size="middle"
              // type="card"
            >
              <Tabs.TabPane
                forceRender={true}
                tab={
                  <Stack spacing="tight" alignment="center">
                    <Stack.Item>
                      <AntAvatar src="https://joeschmoe.io/api/v1/random" />
                    </Stack.Item>
                    <Stack.Item>
                      <TextStyle>
                        instagram <Caption>Bloom zhou</Caption>
                      </TextStyle>
                    </Stack.Item>
                  </Stack>
                }
                key="1"
              >
                <CollectCard title="infomation22">
                  <Card.Section>tab 1</Card.Section>
                </CollectCard>
              </Tabs.TabPane>
              <Tabs.TabPane
                forceRender={true}
                tab={
                  <Stack spacing="tight" alignment="center">
                    <Stack.Item>
                      <AntAvatar src="https://joeschmoe.io/api/v1/random" />
                    </Stack.Item>
                    <Stack.Item>
                      <TextStyle>
                        Facebook <Caption>Bloom zhou</Caption>
                      </TextStyle>
                    </Stack.Item>
                  </Stack>
                }
                key="2"
              >
                <CollectCard title="infomation22">
                  <Card.Section>tab 2</Card.Section>
                  <Card.Section>tab 2</Card.Section>
                </CollectCard>
              </Tabs.TabPane>
            </Tabs>
          </AntTabs>
        </Layout.Section>
        <Layout.Section secondary>
          {/* Timeline */}
          <TimeLineRemark />
          {/* Other information */}
          <OtherInfo />
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
