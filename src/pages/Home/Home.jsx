import { Card, Page } from "@shopify/polaris";

import React from "react";
import { Sortable } from "../Sortable/Sortable";

const Home = () => {
  return (
    <Page title="Home">
      <Card sectioned>
        <Sortable handle/>
      </Card>
    </Page>
  );
};

export default Home;
