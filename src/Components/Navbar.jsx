import React from "react";
import { Link, useHistory } from "react-router-dom"
import {auth} from '../Firebase'
import Typical from 'react-typical'

const Navbar = ({user}) => {
  const history = useHistory();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand navheading" to="/">
        GitExtractor
        </Link>
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
      


            {user ?
                <ul className="navbar-nav ml-auto">
         
          <li className="nav_item">
              <Link className="nav_link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav_item">
              <Link className="nav_link" to="/About">
                About
              </Link>
            </li>

            <li className="nav_item">
              <Link className="nav_link" to="/Contact">
                Contact
              </Link>
            </li>

            <li class="nav-item">
          <Link class="nav_link" onClick={()=>{
            auth.signOut()
            history.push("/Login")
          }} 
          
          >
            Logout
          </Link>
          </li>
            
            </ul>
           
          :
          <ul className="navbar-nav ml-auto">
          <li className="nav_item">
              <Link className="nav_link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav_item">
              <Link className="nav_link" to="/About">
                About
              </Link>
            </li>

            <li className="nav_item">
              <Link className="nav_link" to="/PleaseLogin">
                Contact
              </Link>
            </li>
          <li className="nav_item">
          <Link className="nav_link" to="/Login">
            Login
          </Link>
          </li>
          </ul>
          
          }
         
       
        </div>
      </nav>
    </>
  );
};

export default Navbar;
