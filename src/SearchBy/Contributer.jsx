import React, {useState} from 'react'
import Navbar from '../Components/Navbar';
// import { Avatar } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios"
import Footer from "../Components/Footer"
import ContributorDetails from './ContributerDetails';
import { BackTop } from 'antd';



toast.configure()

const Contributor = () => {

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
     

   
   

  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [user, setUser] = useState([]);
  const [date, setDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [page, setPage] = useState("");

    const fetchDetails = async () => {
      const url = `https://api.github.com/repos/${query1}/${query2}/contributors?since=${date} to=${toDate}&per_page=40&page=${page}`;
  
      try {
        const { data } = await axios.get(url);
        setUser(data);
       
      } catch (error) {
        toast("Not able to locate User", { type: "error" });
      }
    };
  

    return (
        <>
        
        <div className="home_jax">
            

            <div className="container" >
          
            <div className="userRepo_inputBar_Home">

            

            <input
                type="text"
                value={query1}
                className="form-control"
                onChange={(e) => setQuery1(e.target.value)}
                placeholder="Organization Name..."
                // className="text-white"
              />
              <input
                type="text"
                value={query2}
                className="form-control"
                onChange={(e) => setQuery2(e.target.value)}
                placeholder="Repositories Name..."
                
              />

             
              <input
                type="date"
                value={date}
                className="form-control"
                onChange={(e) => setDate(e.target.value)}
                placeholder="Please select the date"
                
              />

              <input
                type="date"
                value={toDate}
                className="form-control"
                onChange={(e) => setToDate(e.target.value)}
                placeholder="Please select the date"
                
              />

<input type="number"
                min="1"
                value={page}
                className="form-control w-50"
                onChange={(e) => setPage(e.target.value)}
                placeholder="Enter the page no." />

             
                <button onClick={fetchDetails} className="btn btn-outline-primary bttn">
                  Fetch User
                </button>
                </div>     





       

<ContributorDetails repos={user} />

<h1>{user.login}</h1>

<BackTop>
      <div style={style}><i class="fas fa-chevron-up"></i></div>
    </BackTop>

    </div>
    </div>         

           
        </>
    )
}

export default Contributor;
