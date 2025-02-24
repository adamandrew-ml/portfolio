import React from "react";
import { useState } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Play from "./pages/Play/Play";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  const routeReference = [
    { ref: "home", id: "homeId", element: <Home /> },
    { ref: "about", id: "aboutId", element: <About /> },
    { ref: "contact", id: "contactId", element: <Contact /> },
    { ref: "projects", id: "projectsId", element: <Projects /> },
    { ref: "play", id: "playId", element: <Play /> },
  ];
  5;
  5;
  const pageClassName = "h-screen pt-15 bg-white w-screen text-slate-950";

  return (
    <>
      <NavBar routeReference={routeReference} />
      <Home pageClassName={pageClassName} />
      <About pageClassName={pageClassName} />
      <Contact pageClassName={pageClassName} />
      <Projects pageClassName={pageClassName} />
      <Play pageClassName={pageClassName} />
      <Footer />
    </>
  );
}

export default App;
