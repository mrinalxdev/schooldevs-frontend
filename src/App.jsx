import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Course,
  Footer,
} from "./components/index";

function App() {
  return (
    <>
      <h1 className="font-Poppins bg-Solitude">
        <Navbar />
        <Home />
        <About />
        <Course />
        <Teacher />
        <Contact />
        <Footer />
      </h1>
    </>
  );
}

export default App;
