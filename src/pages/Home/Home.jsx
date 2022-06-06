import { Card, Layout, Page } from "@shopify/polaris";
import React, { useEffect, useState } from "react";

import { KeepAlive } from "@/components/KeepAlive";
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
        // setIsAlive1(true);
        // setIsAlive2(false);
        // setIsAlive3(false);
        keep(setIsAlive1, true);
        break;
      case 1:
        // setIsAlive1(false);
        // setIsAlive2(true);
        // setIsAlive3(false);
        keep(setIsAlive2, true);

        break;
      case 2:
        // setIsAlive1(false);
        // setIsAlive2(false);
        // setIsAlive3(true);
        keep(setIsAlive3, true);

        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, [tabIndex]);
  return (
    <Page title="Home">
      <Layout>
        <Layout.Section>
          {TabJSX}
          <KeepAlive alive={isAlive1}>
            <Card1 />
          </KeepAlive>
          <KeepAlive alive={isAlive2}>
            <Card2 />
          </KeepAlive>
          <KeepAlive alive={isAlive3}>
            <Card3 />
          </KeepAlive>
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
