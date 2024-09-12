import React from "react";
import SearchForm from "./SearchForm";
import Infoboxes from "./Infoboxes";
import Image from "next/image";

const HomePageHero = () => {
  return (
    <div>
      <h1>Find your new backyard chickens today</h1>
      <h3>Choose your dream flock</h3>
      <Image src="/assets/images/chicken1.jpg" width="200" height="200" />
      <SearchForm />
    </div>
  );
};

export default HomePageHero;
