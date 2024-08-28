import React from "react";
import Navbar from "../../navbar/Navbar";
import { Footer } from "../../footer/Footer";
import DescriptionCard from "./card/DescriptionCard"; // Corrected the typo
import { Card } from "./card/Card";

export const Home = () => {
  return (
    <>
      <Navbar />
      <DescriptionCard />

      <div className="flex flex-col items-center mt-8 p-4">
        <h2 className="text-2xl font-bold mb-4 text-[#008080]">
          Why Thrift Heaven?
        </h2>

        <div className="grid grid-cols-2 gap-4 max-w-screen-lg">
          <Card text={"Wide Audience Reach"} />
          <Card text={"Competitive Fees"} />
          <Card text={"Simple Listing Process"} />
          <Card text={"Dedicated Support"} />
        </div>
      </div>

      <Footer />
    </>
  );
};
