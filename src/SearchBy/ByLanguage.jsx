import React, {useState} from 'react'
import Navbar from '../Components/Navbar';
// import { Avatar } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"
import Footer from "../Components/Footer"
import Repos from '../Components/Repos';
import { BackTop } from 'antd';
import SearchReposDetails from '../SearchBy/SearchReposDetails'



toast.configure()

const ByLang = () => {

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
     

   
    const [lang,setlang] = useState(""); 
    const [repos, setrepos] = useState([]);
    const [page, setPage] = useState("");


    const fetchDetails = async () => {
        try{
            const { data } = await axios.get(
                  `https://api.github.com/search/repositories?q=${lang}&per_page=40&page=${page}`
                );     
                setrepos(data.items);
           
        } catch  (error) {
            toast.error('Wrong Enter ❌' ,{position:toast.POSITION.TOP_CENTER})
            console.log(error);
        }
    }
  

    return (
        <>
        
        <div className="home_jax">
            

            <div className="container" >
          
            <div className="userRepo_inputBar_Home">

            

  <input type="text" className="form-control"
   placeholder="Enter Repostory Name" value={lang} onChange={(e)=>setlang(e.target.value)}  />

<input type="number"
                min="1"
                value={page}
                className="form-control w-50"
                onChange={(e) => setPage(e.target.value)}
                placeholder="Enter the page no." />

    <button className="btn btn-outline-primary bttn" type="button" onClick={fetchDetails}>Search</button>


</div>



       

<SearchReposDetails repos={repos} />

<BackTop>
      <div style={style}><i class="fas fa-chevron-up"></i></div>
    </BackTop>


            </div>
            
            </div>

           
        </>
    )
}

export default ByLang;
