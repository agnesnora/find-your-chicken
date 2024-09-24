import React from "react";
import Link from "next/link";
import Infoboxes from "@/components/Infoboxes";
import HomePageHero from "@/components/HomePageHero";
import HomeChickensPage from "@/components/HomeChickensPage";

const HomePage = () => {
  return (
    <div>
      <HomePageHero />
      <Infoboxes />
      <HomeChickensPage />
    </div>
  );
};

export default HomePage;
