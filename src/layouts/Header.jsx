import { CircleRightMajor, ProfileMajor } from "@shopify/polaris-icons"; // eslint-disable-next-line
import { CustomProperties, TopBar } from "@shopify/polaris";
import { useCallback, useMemo, useState } from "react";

export const Header = () => {
  const [userMenuActive, setUserMenuActive] = useState(false);
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  // eslint-disable-next-line
  const [avatarSrc, setAvatarSrc] = useState(
    "https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
  );
  // eslint-disable-next-line
  const [username, setUsername] = useState("Transon");

  const usernameShortCut = useMemo(() => {
    if (!username?.length) return "";
    return username.slice(0, 2);
  }, [username]);

  // header avatar menu actions
  const userMenuActions = [
    {
      items: [
        { content: "Account settings", icon: ProfileMajor, onAction() {} },
        { content: "Log out", icon: CircleRightMajor, onAction() {} },
      ],
    },
  ];

  return (
    // <CustomProperties colorScheme='dark'>
    <TopBar
      showNavigationToggle
      userMenu={
        <TopBar.UserMenu
          actions={userMenuActions}
          name={username}
          avatar={avatarSrc}
          // detail={storeName}
          initials={usernameShortCut}
          open={userMenuActive}
          onToggle={toggleUserMenuActive}
        />
      }
      // searchResultsVisible={searchActive}
      // searchField={searchFieldMarkup}
      // searchResults={searchResultsMarkup}
      // onSearchResultsDismiss={handleSearchResultsDismiss}
      // onNavigationToggle={toggleMobileNavigationActive}
    />
    // </CustomProperties>
  );
};
