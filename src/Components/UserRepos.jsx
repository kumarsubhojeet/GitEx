import {useState,useEffect,useRef} from 'react';
import {toast} from "react-toastify"
import axios from "axios"
import { BackTop } from 'antd';
import RList from '../Components/RList';
import Profile from "../Components/Profile"
import Navbar from '../Components/Navbar';

import {NavLink} from 'react-router-dom'
import Footer from "../Components/Footer"
import {auth} from "../Firebase"

const UserRepos = () => {

  const inputRef = useRef(null)

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
 



    const [username,setname] = useState();
    const [details,setdetails] = useState({})
    const headers = {
      "Authorization" : `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`
    }
  

    const getdata =async()=>{
       try {
        inputRef.current.style.visibility="visible";
        const { data } = await axios.get(`https://api.github.com/users/${username}`,{
          "headers" : headers
        });
        setdetails(data);
        
       } catch (error) {

        toast.error('Wrong Enter ❌' ,{position:toast.POSITION.TOP_CENTER})
        console.log(error);
       }
    }

  return (
    <>
    
      <div className="container">
        <div className="userRepo_inputBar">
          <input
            type="text"
            className="form-control "
            value={username}
            onChange={(e)=>setname(e.target.value)}
            placeholder="Enter User Name..."/>

          
            <button  className="btn btn-outline-primary userRepo_btn" type="button" onClick={getdata}>
            Search
            </button>
          
        </div>

        <div className="disp" ref={inputRef} style={{visibility: 'hidden'}}>
        <Profile details={details}/>
        <RList repos_url={details.repos_url} />
        </div>

      
<BackTop>
      <div style={style}><i class="fas fa-chevron-up"></i></div>
    </BackTop>
    
      </div>
     
    </>
  );
};

export default UserRepos;
