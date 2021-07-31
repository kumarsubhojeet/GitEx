import React from 'react'
import {Link} from 'react-router-dom'
import git_logo from '../New_img/git.gif' 

const Footer = () => {
  return (
    <div>
    <div className="footermain">


      <div className="f_child">

    <div className="location">

      <div className="house">
      <i class="far fa-envelope loc"></i>
      <h4>git.extractor@gmail.com</h4>
      </div>

      <div className="phone">
      <i class="fas fa-phone-alt loc"></i>
      <h4>+123456789</h4>
      </div>

    </div>

    <div className="social">
      <a target="_blank" href="https://www.instagram.com/git_extractor/"><i class="fab fa-instagram"></i></a>
      <a  target="_blank" href="https://www.facebook.com/Git-Extractor-107399428283927"><i class="fab fa-facebook-f"></i></a>
      <a target="_blank" href="https://github.com/"><i class="fab fa-github"></i></a>
      <a  target="_blank" href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin"><i class="fab fa-linkedin-in"></i></a>
    <a target="_blank" href="https://twitter.com/home"><i class="fab fa-twitter"></i></a>
    
    </div>

    </div>

    <div className="copyright">
    <p> Copyright &copy; 2021 All Rights Reserved by GitExtractor</p>
    </div>

    </div>

      
    </div>
  )
}

export default Footer
