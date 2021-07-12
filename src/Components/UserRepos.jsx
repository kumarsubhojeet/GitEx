import {useState} from 'react';
import {toast} from "react-toastify"
import axios from "axios"

import RList from '../Components/RList';
import Profile from "../Components/Profile"

import {NavLink} from 'react-router-dom'
import Footer from "../Components/Footer"

const UserRepos = () => {

    const [username,setname] = useState();
    const [details,setdetails] = useState({})

    const getdata =async()=>{
       try {
        const { data } = await axios.get(`https://api.github.com/users/${username}`);
        setdetails(data);
        
       } catch (error) {

        toast.error('Wrong Enter ❌' ,{position:toast.POSITION.TOP_CENTER})
        console.log(error);
       }
    }

  return (
    <>
      <div className="container">
        <div className="input-group mb-3 input_bar">
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e)=>setname(e.target.value)}
            placeholder="Enter User Name..."/>

          <div className="input-group-append">
            <button  className="btn btn-primary btnn" type="button" onClick={getdata}>
              Serach
            </button>
          </div>
        </div>

        <div className="disp">
        <Profile details={details}/>
        <RList repos_url={details.repos_url} />
        </div>

        {/* <Footer /> */}
    
      </div>
    </>
  );
};

export default UserRepos;
