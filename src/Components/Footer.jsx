import React from 'react'
import { NavLink } from 'react-router-dom'
import { BackTop } from 'antd';
import Mobile from "../img/Mobile.svg"

import gif from "../img/Git Extractor (1).gif"

const Footer = () => {
    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: "40px",
        backgroundColor: ' #1a5276 ',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
      };

    return (
        <>
<div className="footermain">
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 footerinside">
            <img src={gif} className="gif" alt="Img-Error" />
            <hr />
            <h6 style={{color:" #d35400 "}}>About</h6>
             <p style={{color:"white"}}>Welcome to goodNews where you eill find news with your choice of category with various information contained in it and you can search react time weather of your City Enjoy. 🙂</p>
          </div>

         

          <div className="contact_footer">
            <NavLink to="/contact">
            <img src={Mobile} alt="Error" className="Footer_mobile"  />
            </NavLink>
          
          </div>
     
          
          
          <BackTop>
      <div style={style}><i class="fas fa-arrow-up "></i></div>
    </BackTop>

        </div>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12 footerinside">
            <p className="copyright-text" style={{color:" #f4d03f  ", fontFamily: "vardana"}}>Copyright &copy; 2021 All Rights Reserved by GitExtractor
         
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12 footerinside">
            <ul className="social-icons">
              <li><a className="facebook" href="/"><i class="fab fa-facebook-f"></i></a></li>
              <li><a className="twitter" href="/"><i class="fab fa-twitter"></i></a></li>
              <li><a className="dribbble" href="/"><i class="fab fa-instagram"></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin" target='_blank'><i class="fab fa-linkedin-in"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</div>
        </>
    )
}

export default Footer