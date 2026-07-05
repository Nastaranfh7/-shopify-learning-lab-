// توضیح فارسی برای تو:
// این نسخهٔ RootLayout شامل Frame، TopBar، Navigation و UserMenu کامل است.

import React from "react";
import { AppProvider, Frame, TopBar, Navigation } from "@shopify/polaris";
import { Outlet } from "react-router-dom";
import "@shopify/polaris/build/esm/styles.css";

export default function RootLayout() {

  // -----------------------------
  // 🔵 state مخصوص UserMenu
  // -----------------------------
  // توضیح فارسی:
  // این state مشخص می‌کند منوی کاربری باز است یا بسته.
  const [userMenuActive, setUserMenuActive] = React.useState(false);

  // توضیح فارسی:
  // این تابع وضعیت منو را تغییر می‌دهد (باز ↔ بسته)
  const toggleUserMenuActive = () => {
    setUserMenuActive((active) => !active);
  };

  // -----------------------------
  // 🔵 state مخصوص SearchField
  // -----------------------------
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  // -----------------------------
  // 🔵 Navigation Sidebar
  // -----------------------------
  const navigationItems = [
    { label: "Home", url: "/" },
    { label: "API", url: "/api" },
    { label: "Webhooks", url: "/webhooks" },
    { label: "App Structure", url: "/structure" },
    { label: "Polaris", url: "/polaris" },
    { label: "Polaris Card", url: "/polaris/card" },
    { label: "Polaris Layout", url: "/polaris/layout" },
    { label: "Polaris Button", url: "/polaris/button" },
    { label: "Polaris Form", url: "/polaris/form" },

  ];

  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section items={navigationItems} />
    </Navigation>
  );

  // -----------------------------
  // 🔵 UserMenu + SearchField
  // -----------------------------
  const userMenuMarkup = (
    <TopBar.UserMenu
      name="Nas"
      detail="Developer"
      actions={[
        {
          items: [
            { content: "Settings" },
            { content: "Logout" },
          ],
        },
      ]}
      open={userMenuActive}          // اینجا state وصل می‌شود
      onToggle={toggleUserMenuActive} // اینجا تابع toggle وصل می‌شود
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      value={searchValue}
      onChange={handleSearchChange}
      placeholder="Search..."
    />
  );

  const topBarMarkup = (
    <TopBar
      userMenu={userMenuMarkup}
      searchField={searchFieldMarkup}
    />
  );

  // -----------------------------
  // 🔵 Frame اصلی
  // -----------------------------
  return (
    <AppProvider>
      <Frame topBar={topBarMarkup} navigation={navigationMarkup}>
        <div style={{ padding: "2rem" }}>
          <Outlet />
        </div>
      </Frame>
    </AppProvider>
  );
}
