import React,{useEffect,useState} from 'react'
import cell from "../New_img/cell.svg";
import { NavLink } from "react-router-dom";
import {auth} from "../Firebase"

import userr from "../img/user.svg";
import commis from "../img/cimmits.svg";
import location from "../img/location.svg";
import date from "../img/date.svg";
import cont from "../img/contributer.svg";

import Contact from "../Components/Contact"
import Footer from "../Components/Footer"
import { BackTop } from 'antd';
import Typical from 'react-typical'
import PleaseLogin from '../Components/PleaseLogin'
import About from "../Components/About"
import SearchBy from "../New_img/searchByrepos.svg"
import ByLang from '../New_img/Bylang.svg'
import ByName from '../New_img/ByName.svg'


const LandingPage = () => {

  const [user,setuser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) setuser(user)
      else setuser(null)
    })
  }, [])

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 40,
    backgroundColor: ' #2e4053 ',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    duration: 1300
  };
 

  return (
    <>
      <div className="landing_main">
        <div className="heading">
          <h1>GitExtractor</h1>

          <h3>Search</h3>
          <Typical
        steps={['New Peoples 👨‍🎓', 4000, 'New Repositories💾', 4000, "Hire Individuals 👩‍🏫" , 4000]}
        loop={Infinity}
        wrapper="p"
      />
    


        </div>

        <div className="picture_landing">
          <img src={cell} className="cell_landingpg" alt="Error" />
        </div>

        <div className="heading2">
          <h1>GitExtractor</h1>
          <h3>Search</h3>
          <Typical
        steps={['New Peoples 👨‍🎓', 4000, 'New Repositories💾', 4000, "Hire Individuals 👩‍🏫" , 4000]}
        loop={Infinity}
        wrapper="p"
      />



        </div>
      </div>

   <About />

     <div className="Features">
      <h4>Features</h4>
      <i class="fas fa-search faas"></i>
      </div>          




{
         user?
         <>
         <div data-aos="zoom-in" className="tec_aoc">
<li className="landing_items">
              <NavLink exact className="landing_links" to="/userRepos">
                <img src={ByName} className="link_img" alt="" />
                <br />
               <h5 className="landing_items_h5"> Serach By UserName </h5><span className="sr-only">(current)</span>
              </NavLink>
            </li>
</div>

<div data-aos="zoom-in-right" className="tec_aoc">
            <li className="landing_items">
              <NavLink exact className="landing_links" to="/SearchByRepos">
                <img src={SearchBy} className="link_img" alt="" /> <br />
               <h5 className="landing_items_h5">Search Repository</h5>
              </NavLink>
            </li>
          </div>
          
       {/* <div data-aos="zoom-in-up" className="tec_aoc">
            <li className="landing_items">
              <NavLink exact className="landing_links" to="/ByLang">
                <img src={ByLang} className="link_img" alt="" /> <br />
                <h5 className="landing_items_h5">Search By language</h5>
              </NavLink>
            </li>
          </div> */}

          {/* <div data-aos="zoom-in-up" className="tec_aoc">
            <li className="landing_items">
              <NavLink exact className="landing_links" to="/UserByRepos">
                <img src={commis} className="link_img" alt="" /> <br />
                <h5 className="landing_items_h5">Search User Repositories</h5>
              </NavLink>
            </li>
          </div> */}

          {/* <div data-aos="zoom-in-left" className="tec_aoc">
            <li className="landing_items">
              <NavLink exact className="landing_links" to="/ReposLang">
                <img src={date} className="link_img" alt="" /> <br />
              <h5 className="landing_items_h5">Search User based on language</h5>
              </NavLink>
            </li>
          </div> */}

          <div data-aos="zoom-in-down" className="tec_aoc">
            <li className="landing_items">
              <NavLink exact className="landing_links" to="/Home">
                <img src={location} className="link_img" alt="" /> <br />
               <h5 className="landing_items_h5"> Search By Location & Language</h5>
              </NavLink>
            </li>
          </div>

          <div data-aos="zoom-in-left" className="tec_aoc">
            <li className="landing_items">
              <NavLink exact className="landing_links" to="/Commite">
                <img src={date} className="link_img" alt="" /> <br />
              <h5 className="landing_items_h5">  Search By Commits With Date</h5>
              </NavLink>
            </li>
          </div>

          <div data-aos="zoom-in-right" className="tec_aoc">
            <li className="landing_items">
              <NavLink exact className="landing_links" to="/Contributer">
                <img src={cont} className="link_img" alt="" /> <br />
               <h5 className="landing_items_h5"> Search User contributor</h5>
              </NavLink>
            </li>
          </div>

        
         </>

         
        
        :
        <>
        <PleaseLogin />
        </>
        }

   {user?<Contact />: <> </>}
       
    
    <Footer />

<BackTop>
      <div style={style}><i class="fas fa-chevron-up"></i></div>
    </BackTop>
    </>
  );
};

export default LandingPage;
