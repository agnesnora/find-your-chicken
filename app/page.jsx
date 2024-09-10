import React from "react";
import Link from "next/link";
import Infoboxes from "@/components/Infoboxes";
import HomePageHero from "@/components/HomePageHero";

const HomePage = () => {
  return (
    <div>
      <HomePageHero />
      <Infoboxes />
    </div>
  );
};

export default HomePage;
