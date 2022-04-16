import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import Links from "./Links.js";

import "./Nav.scss";
const Nav = () => {
  const [showBurger, setShowBurger] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const actuallLocation = window.location.pathname;
  const burgerClick = () => {
    setShowSidebar(!showSidebar);
  };
  const checkWindowSize = () => {
    if (window.innerWidth <= 760) {
      setShowBurger(false);
    } else {
      setShowBurger(true);
      setShowSidebar(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
  }, []);
  window.addEventListener("resize", checkWindowSize);

  return (
    <>
      <nav>
        <div className="logo">
          {showBurger ? (
            <div className="logo-text">
              <Link to="/">Joanna Stopka</Link>
            </div>
          ) : (
            <div className="logo-text">
              <Link to="/">JS</Link>
            </div>
          )}
        </div>
        <div className="navigation">
          {showBurger ? (
            <ul>
              {Links.map((item) => (
                <Link
                  to={item.path}
                  className={
                    actuallLocation === item.path
                      ? "navigation-link actuall-page"
                      : "navigation-link"
                  }
                >
                  {item.title}
                </Link>
              ))}
            </ul>
          ) : (
            <>
              {!showSidebar ? (
                <VscMenu className="hamburger" onClick={burgerClick} />
              ) : (
                <AiOutlineClose className="hamburger" onClick={burgerClick} />
              )}
            </>
          )}
        </div>
      </nav>
      <div className={showSidebar ? "sidebar active" : "sidebar"}>
        <ul className="sidebar-menu">
          {Links.map((item, index) => (
            <li key={index} className="sidebar-text">
              <Link to={item.path}>
                {/* {item.icon} */}
                {item.title}
              </Link>
              <div
                className="sidebar-underline"
                style={
                  actuallLocation === item.path
                    ? { width: "100%", height: "3px" }
                    : {}
                }
              ></div>
            </li>
          ))}
        </ul>

        {/* <div className="sidebar-socials">
          <ul>
            <li className="sidebar-socials">
              <a href="www.youtube.com">
                <BsFacebook />
              </a>
              <a href="www.youtube.com">
                <BsInstagram />
              </a>
              <a href="www.youtube.com">
                <BsFacebook />
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Nav;
