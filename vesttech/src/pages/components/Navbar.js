import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import navimg from "../../images/bitcoin.png";

const Navbar = () => {
    return (
      <>
        <navbar className="main_navbar fixed-top">
          <div className="brand-logo-name">
            <Link to={"/"} className="brand-logo">
              <img src={navimg} alt="img" />
            </Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#details">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <Link to={"/"}>Get Started</Link>
              </li>
            </ul>
          </nav>
        </navbar>
      </>
    );
  }

export default Navbar;
