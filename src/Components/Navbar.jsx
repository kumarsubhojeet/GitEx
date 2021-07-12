import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../img/37c31a531a4d439aa7d7dff1d384f46b.png"

import gif from "../img/Git Extractor (1).gif"

const Navbar = () => {
  return (
    <>

        <nav className="navbar navbar-expand-lg navbar-light bg-secoundary nav_Head">
        {/* //  style={{height:"5rem"}}> */}
          <NavLink  className="NavHeader"  to="/">
           <img src={gif} className="logo" alt="Img_Error" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              
              <li className="nav-item">
                <NavLink exact className="navlinks" activeClassName="active_class" to="/login">
                  Login <span className="sr-only">(current)</span>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink exact className="navlinks" activeClassName="active_class" to="/signup">Signup</NavLink>
              </li>

              <li className="nav-item">
                <NavLink exact className="navlinks" activeClassName="active_class" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
   
     
    </>
  );
};

export default Navbar;
