import React, { useEffect, useState } from "react";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom'
import { navLinks } from "../../Data";
import NavLink from "./NavLink";
import MobileNavLinks from "./MobileNavLinks";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null)

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20)
    }
    window.addEventListener("scroll",scrollActive)
    return () => window.removeEventListener("scroll", scrollActive)
  }, [active])

  return (
    <div className={`${active ? "shadow-lg bg-Solitude" : ""} fixed w-full top-0 left-0 z-20`}>
      <div className="">
        <div className={`${active ? "py-2 transition-all duration-300" : "py-4"} container py-4 mx-auto flex items-center justify-between px-2`}>
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal uppercase font-bold tracking-wide">
              SchoolDevs
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          <Link to="https://youtube.com">
          <button className="py-3 px-6 font-bold text-sm border-solid border rounded-lg border-gray">
            Sign Up
          </button>
          </Link>
          {toggle && (
            <div className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8">
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-20 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
