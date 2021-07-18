import React, { useState, useEffect } from "react";
import axios from "axios";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '../Components/Navbar';

import {Link} from 'react-router-dom'

import Footer from "../Components/Footer"

const ByLang = () => {

    const [lang,setlang] = useState("");
    const [repo,setrepo] = useState([])
    const [count,setcount] = useState(0)

    const previous = async()=>{
      
      try {
       setcount(count-1)
       if(count<1){
           alert("This is Last Page")     
       }
       const res = await axios.get(`https://api.github.com/search/repositories?q=${lang}&per_page=40&page=${count}`)
       setrepo(res.data.items)
   } catch (error) {
       console.log(error);
   }
}

   const next = async()=>{

       try {
           setcount(count+1)
           const res = await axios.get(`https://api.github.com/search/repositories?q=${lang}&per_page=40&page=${count}`)
           setrepo(res.data.items)
    } catch (error) {
        console.log(error);
    }
   }

    const fetchDetails = async () => {
        try{
            const res = await axios.get(`https://api.github.com/search/repositories?q=${lang}&per_page=40`)
            setrepo(res.data.items)
            

            if(!lang){
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
      <div className="container">
        <div className="input-group mb-3 input_bar">

          <input
            type="text"
            className="form-control"
            placeholder="Please Provide the repos language...."
            value={lang}
            onChange={(e) => setlang(e.target.value)}
          />

          <div className="input-group-append">
            <button
              className="btn btn-primary bttn"
              type="button"
              onClick={fetchDetails}
            >
              Search
            </button>
          </div>
        </div>


        <div className="row">
                {
                    repo.map(item=>(
                        <div className="col-md-3">
                          <a target="_blank" href={item.owner.html_url}>
                            <div className="card my-2">
                                <img src={item.owner.avatar_url} className="img-fluid w-50 mt-3 mx-auto rounded-circle"
                                alt="Img-Error" />
                                <div className="card-body byLand">
                                  <h4>{item.owner.login}</h4>
                                  <h4>{item.language}</h4>
                                  <h4>Forks: {item.forks_count}</h4>
                                  <h4>Watches: {item.watchers}</h4>

                                   
                                    <h4 className="item_login"> {item.login}</h4>
                                  
                                    

                                </div>
                            </div></a>
                        </div>
                    ))
                }
            </div>
      </div>

      <div className="home_btns">
<button type="button" disabled={count<1} className="btn btn-primary previous" onClick={previous}><i class="fas fa-arrow-left"></i></button>
          <button type="button" className="btn btn-primary next" onClick={next}><i class="fas fa-arrow-right"></i></button>
          </div>

          <Footer />
    </>
  );
};

export default ByLang;
