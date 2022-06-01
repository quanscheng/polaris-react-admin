import { CustomProperties, TopBar } from "@shopify/polaris";
import { useCallback, useState } from "react";

export const Header = () => {
  const [userMenuActive, setUserMenuActive] = useState(false);
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  const userMenuActions = [
    {
      items: [{ content: "Community forums" }],
    },
  ];

  return (
    // <CustomProperties colorScheme='dark'>
    <TopBar
      showNavigationToggle
      userMenu={
        <TopBar.UserMenu
          actions={userMenuActions}
          name="Dharma"
          // detail={storeName}
          initials="D"
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
