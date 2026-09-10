import React, { useState } from "react";

const Nav = function () {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-logo">KV</a>
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#impact" onClick={() => setOpen(false)}>Impact</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
