import AuthCheck from "@/components/AuthCheck";
import { Frame } from "@shopify/polaris";
import { Header } from "./Header";
import { LeftBar } from "./LeftBar";
import logo from "../assets/img/logo.svg";
import { routes } from "@/configs/routes";
import { useRoutes } from "react-router-dom";

const Main = () => {
  const elements = useRoutes(routes);
  // 全局顶部 loading 条
  // toast 提示

  const Logo = {
    width: 120,
    topBarSource: logo,
    url: "/",
    accessibilityLabel: "PMP",
    contextualSaveBarSource: logo,
  };

  return (
    <AuthCheck>
      <Frame logo={Logo} navigation={<LeftBar />} topBar={<Header />}>
        {elements}
      </Frame>
    </AuthCheck>
  );
};

export default Main;
