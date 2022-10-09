import React, { useEffect } from "react";
import { Navbar } from "@/components/index";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-gray-50">
      <div>
        <Navbar />
        <h1 className="text-black  text-3xl font-extrabold p-3">Home</h1>
      </div>
    </div>
  );
};

export default Home;
