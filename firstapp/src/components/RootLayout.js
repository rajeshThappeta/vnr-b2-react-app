import React from "react";
import NavigationBar from "./routing-demo-components/NavigationBar";
import Footer from "./routing-demo-components/Footer";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <NavigationBar />
      <div style={{ minHeight: "85vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default RootLayout;
