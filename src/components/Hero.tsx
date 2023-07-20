import React from "react";
import CardTilt from "./CardTilt";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-auto px-2 md:px-20 mt-10 md:mt-20">
        <div>
          <h1 className="text-4xl md:text-7xl text-center max-w-[800px] text-gray-200">
            Descubre el <span className="text-[#6bd969] font-bold">poder</span>{" "}
            de la{" "}
            <span className="text-[#fbca34] font-bold">
              inteligencia artificial
            </span>{" "}
            para <span className="text-[#fff554] font-bold">impulsar</span> tu{" "}
            <span className="text-[#fff7b6] font-bold">emprendimiento</span>.
          </h1>
        </div>
        <div className="mt-8 md:mt-14">
          <CardTilt />
        </div>
      </div>
    </div>
  );
};

export default Hero;
