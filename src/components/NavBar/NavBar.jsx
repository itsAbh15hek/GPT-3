import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Links = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT</a>
    </p>
    <p>
      <a href="#possibilities">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="gpt3-logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Links />
        </div>
        <div className="gpt3__navbar-sign">
          <p>Sign In</p>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {menu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setMenu(true)} />
        )}
        {menu && (
          <div className="gpt3__navbar-menu_container scale-up-tr">
            <div className="gpt3__navbar-menu_container-links">
              <Links />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
