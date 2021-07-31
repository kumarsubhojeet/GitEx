import React,{useEffect,useState} from 'react'
import PleaseLogin from './PleaseLogin'
import {auth} from "../Firebase"

const About = () => {

  

    return (
        <>
         
         
        
         <div className="about">
        <div className="about_head">
          <h4>About</h4>
          <i class="fas fa-id-badge faas"></i>
        </div>

        <div className="about_para">
          <p>
            We believe this website give a border spectrum of opportunity to be
            seen and getting recognize because all the efforts which you put in,
            Instead of finding code all day long in an difficult to find
            environment this place give you codes, repository and users within
            seconds.
            <br />
            This website is build by coders for coders because we wanted to
            narrow down the path for finding codes and making easier and more
            reachable to all, we hope you find all the “hello worlds” out there.
            <br />
            -Team Git Extractor.
          </p>
        </div>
      </div>
      </>
       

    )
}

export default About
