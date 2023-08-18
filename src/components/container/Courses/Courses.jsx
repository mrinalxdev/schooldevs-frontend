import React from "react";
import { categories, courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";

const Courses = () => {
  return (
    <div className="section" id="course">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Trending <span className="text-Teal">Technologies</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          The technology landscape is ever-evolving, and several trends have
          captured the attention of the developer community. If you're looking
          to dive into the developer community, consider these trending
          technologies:
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
        {categories.map((category) => {
          return <Categories key={category.id} {...category} />;
        })}
      </div>
      <div className="text-xl font-bold mt-32">Most Popular Courses</div>
      <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:W-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
