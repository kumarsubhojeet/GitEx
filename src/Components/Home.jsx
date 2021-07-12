import React, {useState} from 'react'
// import { Avatar } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"
import Repos from '../Components/Repos';




toast.configure()

const Home = () => {

   
    const [lang,setlang] = useState("");
    const [location,setlocation] = useState("");
    const [repos, setrepos] = useState([]);


    const fetchDetails = async () => {
        try{
            const res = await axios.get(`https://api.github.com/search/users?q=location:${location}+language:${lang}`)
           setrepos(res.data.items)

            if(!lang || !location){
                toast.error('No data Entered ❌' ,{position:toast.POSITION.TOP_CENTER})
            }
        } catch  (error) {
            toast.error('Wrong Enter ❌' ,{position:toast.POSITION.TOP_CENTER})
            console.log(error);
        }
    }
  

    return (
        <>
        <div className="home_jax">
            

            <div className="container" >
          
            <div className="input-group mb-3 input_bar">

            <input type="text" className="form-control"
   placeholder="Country" value={location} onChange={(e)=>setlocation(e.target.value)}  />

  <input type="text" className="form-control"
   placeholder="Enter Language" value={lang} onChange={(e)=>setlang(e.target.value)}  />

  <div className="input-group-append">
      
    <button className="btn btn-primary bttn" type="button" onClick={fetchDetails}>Search</button>
  </div>

</div>

<Repos repos={repos} />


            </div></div>
        </>
    )
}

export default Home
