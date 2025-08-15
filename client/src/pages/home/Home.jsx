import React from "react";
import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import ToKnowUs from "./sections/ToKnowUs";
import Destinations from "./sections/Destinations";
import OurTeam from "./sections/OurTeam";
import GetToKnowUs from "./sections/GetToKnowUs";
import PopularTour from "./sections/PopularTour";
import Testimonial from "./sections/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <ToKnowUs />
      <Destinations />
      <OurTeam />
      <GetToKnowUs />
      <PopularTour />
      <Testimonial />
    </div>
  );
}
