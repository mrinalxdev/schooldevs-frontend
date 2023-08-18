import React from "react";
import about from "../../assets/About.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            What does this platform provides ?
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            We present a seamless pathway for aspiring juniors keen on delving
            into new technologies. Our platform simplifies the learning journey,
            providing an accessible route for those eager to explore the realm
            of technology. Created with a student's perspective in mind, our
            platform aims to empower the next generation of learners.
          </p>
          <Link to="https://www.github.com/mrinalxdev">
            <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
              Who built this ?
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
