import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const routeReference = [
  { ref: "home", element: <Home /> },
  { ref: "about", element: <About /> },
  { ref: "contact", element: <Contact /> },
  { ref: "projects", element: <Projects /> },
  { ref: "play", element: <Play /> },
];

export const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout routeReference={routeReference} />}>
        <Route index element={<Home />} />
        {routeReference.map((item, i) => (
          <Route key={i} path={item.ref} element={item.element} />
        ))}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
