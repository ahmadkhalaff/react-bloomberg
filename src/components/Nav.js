import React from "react";
import BloombergLogo from "../img/bloomberg-logo-white.png";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="main_nav">
          <div className="main_nav_up container">
            <ul>
              <li>
                <a href="/">
                  Bloomberg the Company & Its Products &nbsp;
                  <i className="fa-sharp fa-solid fa-caret-down"></i>
                </a>
                <a href="/">Bloomberg Terminal Demo Request</a>
                <a href="/">
                  <i
                    className="fa-solid fa-desktop"
                    style={{ color: "white" }}
                  ></i>
                  &nbsp; Bloomberg Terminal Anywhere Remote Login
                </a>
                <a href="/">Bloomberg Customer Support</a>
              </li>
            </ul>
          </div>
          <div className="main_nav_down container flex_class">
            <img src={BloombergLogo} alt="" />
            <div className="main_nav_down_right">
              <ul>
                <li>
                  <a href="/">
                    Middle East Edition
                    <i className="fa-sharp fa-solid fa-caret-down"></i>
                  </a>
                  <a href="/">Sign In</a>
                  <button className="btn">Subscribe</button>
                  <a className="search" href="/">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                  <span className="hamburger">
                    <i
                      className="fa-solid fa-bars fa-xl"
                      style={{ color: "#fff" }}
                    ></i>
                  </span>
                  <input type="checkbox" className="toggler" />
                  <div className="category-nav-hidden">
                    <ul>
                      <li>
                        <a href="/">
                          Middle East Edition
                          <i className="fa-sharp fa-solid fa-caret-down"></i>
                        </a>
                        <a href="/">Sign In</a>
                        <a className="search" href="/">
                          <i className="fa-solid fa-magnifying-glass"></i>
                          Search
                        </a>
                        <a href="/" className="category">
                          Markets
                        </a>
                        <a href="/" className="category">
                          Economics
                        </a>
                        <a href="/" className="category">
                          Politics
                        </a>
                        <a href="/" className="category">
                          Wealth
                        </a>
                        <a href="/" className="category">
                          Pursuits
                        </a>
                        <a href="/" className="category">
                          Opinion
                        </a>
                        <a href="/" className="category">
                          Businessweek
                        </a>
                        <a href="/" className="category">
                          Equality
                        </a>
                        <a href="/" className="category">
                          Green
                        </a>
                        <a href="/" className="category">
                          CityLab
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="category-nav container">
          <ul>
            <li className="flex_class">
              <a href="/" className="category">
                <i className="fa-solid fa-circle fa-2xs"></i>&nbsp; Live Now
              </a>
              <a href="/" className="category">
                Markets
              </a>
              <a href="/" className="category">
                Economics
              </a>
              <a href="/" className="category">
                Industries
              </a>
              <a href="/" className="category">
                Tech
              </a>
              <a href="/" className="category">
                AI
              </a>
              <a href="/" className="category">
                Politics
              </a>
              <a href="/" className="category">
                Wealth
              </a>
              <a href="/" className="category">
                Pursuits
              </a>
              <a href="/" className="category">
                Opinion
              </a>
              <a href="/" className="category">
                Businessweek
              </a>
              <a href="/" className="category">
                Equality
              </a>
              <a href="/" className="category">
                Green
              </a>
              <a href="/" className="category">
                CityLab
              </a>
              <a href="/" className="category">
                Crypto
              </a>
              <a href="/" className="category">
                More &nbsp; <i className="fa-solid fa-ellipsis-vertical"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
