import React from 'react'
import {Link} from "react-router-dom"
import dragon from "../img/Cute-Baby-Dragon-Cartoon-Design-SVGPNG-Graphics-9250273-1.png"
import Navbar from '../Components/Navbar';

const PleaseLogin = () => {
      return (
          <>
         
            <div className="plslogin">
                  <h1>Please Login To View All Features</h1>

                  <Link to="/Login">
                  <img src={dragon} alt="Error" className="dragon" />
                  </Link>
            </div></>
      )
}

export default PleaseLogin
