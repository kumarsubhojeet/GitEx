import React, {useState} from 'react'
import Navbar from '../Components/Navbar';
// import { Avatar } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"
import Footer from "../Components/Footer"
import Repos from '../Components/Repos';




toast.configure()

const Home = () => {

   
    const [lang,setlang] = useState("");
    const [location,setlocation] = useState("");
    const [repos, setrepos] = useState([]);
    const [count,setcount] = useState(0)

    
  
    const previous = async()=>{
      
        try {
         setcount(count-1)
         if(count<1){
             alert("This is Last Page")     
         }
         const res = await axios.get(`https://api.github.com/search/users?q=location:${location}+language:${lang}&per_page=40&page=${count}`)
         const data = await res
         setrepos(res.data.items)
     } catch (error) {
         console.log(error);
     }
 }
 
     const next = async()=>{
 
         try {
             setcount(count+1)
             const res = await axios.get(`https://api.github.com/search/users?q=location:${location}+language:${lang}&per_page=40&page=${count}`)
          const data = await res
          setrepos(res.data.items)
      } catch (error) {
          console.log(error);
      }
     }
  

    const fetchDetails = async () => {
        try{
            const res = await axios.get(`https://api.github.com/search/users?q=location:${location}+language:${lang}&per_page=40`)
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
          <Navbar />
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

<div className="home_btns">
<button type="button" disabled={count<1} className="btn btn-primary previous" onClick={previous}><i class="fas fa-arrow-left"></i></button>
          <button type="button" className="btn btn-primary next" onClick={next}><i class="fas fa-arrow-right"></i></button>
          </div>

<Repos repos={repos} />




            </div>
            
            </div>

           
        </>
    )
}

export default Home
