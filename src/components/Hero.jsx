import React from "react";
import educator from '../assets/educator.svg'
import blueWave from '../assets/Wave.svg'

const Hero = () => {
  return (
  <section id="home" className="mt-28">
    <div className="grid sm:grid-cols-2 font-poppins">
        <div className="flex flex-col gap-4 mb-8 mx-8 sm:pt-8">
            <h1 className="text-5xl font-bold pb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Harry's English Club</h1>
            <p className="font-semibold tracking-wide text-gray-600">Learning English doesn't have to be difficult. Join us now to get started learning English the fun and effective way!</p>
        <div className="flex w-3/4 items-center mx-auto pt-8">
            <button className="btn btn-primary  w-full mb-12 text-xl">Learn More</button>
        </div>
        </div>
        <div>
            <img src={educator} alt="classroom" className="sm:h-full"/>
        </div>
    </div>
        <div className="">
            <img src={blueWave} alt="wave" className="w-full ss:h-[200px] -mt-8" />
        </div>

  </section>
  );
};

export default Hero;
