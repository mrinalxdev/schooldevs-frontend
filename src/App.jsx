import { Routes, Route } from "react-router-dom";

import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from "./components/index";


function App() {
  return (
    <>
      <h1 className="font-Poppins bg-Solitude">
        <Navbar />
        <Home />
        <About />
        <Courses />
        <Teacher />
        <Contact />
        <Footer />
      </h1>
    </>
  );
}

export default App;
