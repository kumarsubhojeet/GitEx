import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import Navbar from '../Components/Navbar';




const Profile = (props) => {
  const { details } = props;
  return (
      
    <>
 
    <div className="container">

       <div className="main">

           <div className="first">
               <div className="first_body">
                   <div className="profile_img">
               <Avatar size={120} className="profile_img_img" 
               src={details.avatar_url} icon={<UserOutlined />} />
               </div>

               <div className="details_first">
               <h4 style={{fontWeight:700}}>{details.login}</h4>
               <h3>Bio</h3>
               <h4 style={{fontSize:"15px"}}>{details.bio}</h4>
               
               <div className="contact">

                   <div className="contact_head">
                       <h5 >Contact</h5>
                   </div>

     
                   <h4 style={{display:"flex"}}><i className="fas fa-envelope faas"></i>
                    {details.email}</h4>

                
                   <h4 style={{display:"flex"}}><i className="fab fa-twitter faas"></i>
                    {details.twitter_username}</h4>

                   <h4 style={{display:"flex"}}><i className="fas fa-map-marker-alt faas"></i> 
                   {details.location}</h4>
               </div>
               
               </div>


               </div>
           </div>

           <div className="secound">
               <div className="secound_body">

                  <div className="followers">
                      <h3><i className="fas fa-users foll"></i> {details.followers}</h3>
                  </div>

                  <div className="repos">
                      <h4>Public Repositories: {details.public_repos}</h4>
                      <h4> Available for hire: {details.hireable ? 'YES' : 'NOPE'}</h4>
                  </div>

                  <div className="Blog">
                   <h3 style={{color:" #2e4053 "}}>Blog</h3>
                   <h5>{details.blog}</h5>

                <a href={details.html_url} target="_blank" className="html_url">Check Repositories
                
                <i class="fas fa-arrow-right"></i>
                </a>

               </div>
           

               </div>
           </div>

       </div>

     </div>
    </>
  );
};

export default Profile;
