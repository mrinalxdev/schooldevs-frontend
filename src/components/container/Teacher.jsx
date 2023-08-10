import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";


const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem]">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus praesentium quae nobis repellat, omnis vel quaerat
            atque voluptates natus blanditiis et id mollitia impedit doloremque
            harum perferendis eum incidunt voluptas odio, recusandae pariatur.
            Earum?
          </p>
          <button className="py-3 px-4 bg-Teal rounded-lg text-white text-sm font-bold">
            Start Teaching
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>

        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem]">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus praesentium quae nobis repellat, omnis vel quaerat
            atque voluptates natus blanditiis et id mollitia impedit doloremque
            harum perferendis eum incidunt voluptas odio, recusandae pariatur.
            Earum?
          </p>
          <button className="py-3 px-4 bg-Teal rounded-lg text-white text-sm font-bold">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div>
      <div className="mb-2">
        {accordions.map(accordion => {
          return <Accordion key={accordion.id} {...accordion} />
        })}
      </div>
    </div>
  );
};

export default Teacher;
