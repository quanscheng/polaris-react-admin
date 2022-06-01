import { CustomProperties, Navigation } from "@shopify/polaris";
import { CustomersMajor, MarketingMajor, OrdersMinor, SettingsMajor } from "@shopify/polaris-icons";

import React from "react";
import { ur } from "@/configs/routes.url";
import { useLocation } from "react-router-dom";

export const LeftBar = () => {
  const { pathname } = useLocation();
  // Section1
  const left_top = [
    {
      url: ur.test,
      label: "Navigation.Section",
      exactMatch: true,
    },
  ];
  // 左边主菜单 Section2
  const left_menu = [
    {
      url: ur.home,
      label: "Home",
      icon: CustomersMajor,
      exactMatch: true,
      // badge: '15',
      subNavigationItems: [
        {
          url: ur.partners,
          label: "All partners",
          // exactMatch: true, // 不加所有子路由都会让改标签处于选中状态
        },
        {
          url: "/collections",
          label: "Collections",
          exactMatch: true,
        },
      ],
    },
    {
      url: ur.campaigns,
      label: "Campaigns",
      icon: MarketingMajor,
      exactMatch: true,
      // badge: '15',
      subNavigationItems: [
        {
          url: ur.allcampaigns,
          label: "All campaigns",
          exactMatch: true,
        },
        {
          url: ur.cooperations,
          label: "Cooperations",
          exactMatch: true,
        },
        {
          url: ur.promotions,
          label: "Promotions",
          exactMatch: true,
        },
      ],
    },
    {
      url: ur.orders,
      label: "Orders",
      icon: OrdersMinor,
      exactMatch: true,
      subNavigationItems: [
        {
          url: ur.deliveries,
          label: "Deliveries",
          exactMatch: true,
        },
        {
          url: ur.payments,
          label: "Payments",
          exactMatch: true,
        },
      ],
    },
  ];
  // 左边下方菜单 Section3
  const bottom_menu = [
    {
      url: ur.settings,
      label: "settings",
      icon: SettingsMajor,
      exactMatch: true,
      // badge: '15',
    },
  ];
  return (
    // <CustomProperties colorScheme='dark'>
    <Navigation location={pathname}>
      <Navigation.Section items={left_top} />
      <Navigation.Section fill separator items={left_menu} />
      <Navigation.Section items={bottom_menu} />
    </Navigation>
    // </CustomProperties>
  );
};
