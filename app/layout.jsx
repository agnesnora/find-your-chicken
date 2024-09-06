import React from "react";
import HomePage from "./page";

export const metadata = {
  title: "Find Your Chicken",
  keywords: "chicken, egg, backyard chicken",
  description: "Find your new flock",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
