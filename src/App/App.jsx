import React from "react";
import { Route, Routes } from "react-router-dom";

// Application Styles
import "../assets/scss/index.scss";

import { About, Contact, E404, FEWD, Home, UX } from "../views";
import { Footer, MainNav } from "components";

function App() {
  return (
    <div className="container App">
      <MainNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/fewd" element={<FEWD />} />
        <Route exact path="/fewd/:project" element={<FEWD />} />
        <Route exact path="/ux" element={<UX />} />
        <Route exact path="/ux/:project" element={<UX />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/about" element={<About />} />
        <Route element={<E404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
