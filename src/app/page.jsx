
import Categories from "@/components/Home/Categories";
import FeatureFoods from "@/components/Home/FeatureFoods";
import Hero from "@/components/Home/Hero";
import Newsletter from "@/components/Home/Newsletter";
import PromoBanner from "@/components/Home/PromoBanner";
import Stats from "@/components/Home/Stats";
import Testimonials from "@/components/Home/Testimonials";
import WorkSteps from "@/components/Home/WorkSteps";
import React from "react";

const page = () => {
  return (
    <div className="space-y-10">
      <Hero></Hero>
      <Stats></Stats>
      <Categories></Categories>
      <PromoBanner></PromoBanner>
      <WorkSteps></WorkSteps>
      <FeatureFoods></FeatureFoods>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  );
};

export default page;
