import "../styles/globals.scss";
import React from "react";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
export const metadata = {
  title: "Find Your Chicken",
  keywords: "chicken, egg, backyard chicken",
  description: "Find your new flock",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
