import React, { useState, createContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import RList from "../Components/RList";
import { jsPDF } from "jspdf";



import {Modal,Button,ListGroup,ListGroupItem} from "react-bootstrap"

const Repos = (props) => {




  const doc = new jsPDF('p' , 'pt');
  const { repos } = props;

 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [info,setinfo] = useState([]);
  const [userrepos, setrepos] = useState([]);
  const token = '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'
  return (
    <>
   
      <div className="row">
        {repos.map((item) => (
          <div className="col-md-3">
            <div className="card my-2 profile_card">

            <Link  onClick={handleShow}>
            <img
                src={item.owner.avatar_url}
                className="img-fluid w-50 rounded-circle profile_photo"
                alt="Img-Error"
                onClick={async function(){
                    try {
                        const res = await fetch(`https://api.github.com/users/${item.owner.login}?access_token=${token}`)
                        const data = await res.json();
                        setinfo(data)
                        
                    } catch (error) {
                        console.log(error);
                    }
                }}
              />
             
      </Link>
      <br />
               <h4 className="user_name_profile" >{item.owner.login}</h4>
     



      <Modal show={show} className="model_view" onHide={handleClose} animation={false}>

<div className="main_model">
      <div className="hirable">
      {info.hireable ? <span className="avail">Available</span> : <span className="nope">Nope</span> }
     </div>

        <div className="profile_img">

          <a href={info.html_url} target="_blank">
              <img src={info.avatar_url} className="avatar_url" alt="Error" />
              </a>
  

     </div>

     <div className="details">
         <h4 className="detail_h4">{info.login}</h4>
     </div>

     <div className="bio_model">
         <p>{info.bio}</p>
     </div>
     <hr />
     <div className="location">
         <div className="location_parent">
         <h5><i class="fas fa-map-marker-alt location_logo"></i> <span> </span>{info.location}</h5>
         <h5>Followers: {info.followers}</h5>
         </div>
         <div className="location_child">
             <h5>Public Repository: {info.public_repos}</h5>
             <h5>public Gists: {info.public_gists}</h5>
         </div>

     </div>

     <div className="social_media">
         <h5><i className="far fa-envelope mail_logo"></i> <span> </span>{info.email}</h5>
         <h5><i className="fab fa-twitter twitter_logo"></i> <span> </span>{info.twitter_username}</h5>
     </div>

     <div className="blog_model">
         <h3>Blog</h3>
         <p>{info.blog}</p>
     </div>

    
     <Modal.Footer>
         

         <div className="btnns">
     <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>

          <button onClick={function(){
           doc.addImage(info.avatar_url,380, 40, 180, 260)
           doc.text(info.login,20,20);
          //  doc.text(info.location,20,40);
           doc.text("---------------------------", 20,60)
           doc.text("Visite Urls -->" ,20,100)
           doc.text(info.url ,20,120);
           doc.text(info.html_url ,20,140);
           doc.text(info.repos_url ,20,160);
           doc.text("---------------------------", 20,180)
           
           
            doc.save("GitExtractor.pdf");
          }} 
          
          type="button" className="btn btn-outline-warning down_btn">Generate Pdf          
         
          </button>
          </div>
      
         </Modal.Footer>
   
   <div className="user_Repo">
   <h2>User Repository</h2>
          <RList repos_url={info.repos_url} className="repos_urlR" />
   </div>

          </div>
      </Modal>
             
    
             

              
              <div className="card-body"></div>
            </div>
          </div>
        ))}
         
      </div>
    </>
  );
};

export default Repos;
