import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";

const Home = () => {
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> is the <br /> new way <br /> to learn online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Collected many roadmaps for your learning . Choose any path as suitable for you . Have a good learning day !
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Share your thoughts 
              {/* This will be leading to the Planetery App  */}
            </button>
          </div>
        </div>

        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="">
        <p className="text-center text-xl">Gathered from across 100+ platforms to make a curated list of Roadmaps for <span className="text-Teal font-bold ">making your dev journey easy</span></p>
      </div>
    </div>
  );
};

export default Home;
