import React from "react";
import Navbar from "@/components/Navbar";
import HomePageHero from "@/components/HomePageHero";
export const metadata = {
  title: "Find Your Chicken",
  keywords: "chicken, egg, backyard chicken",
  description: "Find your new flock",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <HomePageHero />
      </body>
    </html>
  );
};

export default MainLayout;
