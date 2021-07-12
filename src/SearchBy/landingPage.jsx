import React from 'react'
import { NavLink } from "react-router-dom";
import user from "../img/user.svg"
import cell from "../img/cell.svg"
import commis from "../img/cimmits.svg"
import location from "../img/location.svg"
import date from "../img/date.svg"
import cont from "../img/contributer.svg"

import Footet from "../Components/Footer"

const landingPage = () => {
    return (
        <>
            <div className="landingmain">
     

            <div className="photo">
                   <img src={cell} className="Find" alt="" />
                </div>
            </div>
            <h1 className="Features_Landing_page">Features</h1>
            <div className="Links_Landing">
            
                <div className="link_box">
               
            
                
                <li className="landing_items">
                <NavLink exact className="landing_links" to="/login">
                  <img src={user} className="link_img" alt="" />
                  Serach By UserName <span className="sr-only">(current)</span>
                </NavLink>
              </li>
         

              <li className="landing_items">
                <NavLink exact className="landing_links"  to="/about">
                <img src={commis} className="link_img" alt="" />
                  Search By Commits
                </NavLink>
              </li>
              <li className="landing_items">
                <NavLink exact className="landing_links"  to="/Home">
                <img src={location} className="link_img" alt="" />
                  Search By Location & Language
                </NavLink>
              </li>

              <li className="landing_items">
                <NavLink exact className="landing_links"  to="/about">
                <img src={date} className="link_img" alt="" />
                  Search By Date
                </NavLink>
              </li>

              <li className="landing_items">
                <NavLink exact className="landing_links"  to="/about">
                <img src={cont} className="link_img" alt="" />
                  Search By contributor
                </NavLink>
              </li>
     
              </div>
            </div> 

     {/* Footer */}

     <Footet />

        </>
    )
}

export default landingPage
