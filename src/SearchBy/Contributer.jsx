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
import {
      Row,
      Container,
      Col,
      Input,
      Button,
      InputGroup,
      InputGroupAddon,
      Card,
      CardBody,
    } from "reactstrap";



toast.configure()

const Contributer = () => {

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
    const [location,setlocation] = useState("");
    const [repos, setrepos] = useState([]);
    const [count,setcount] = useState(0)
    const [date, setDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [query1, setQuery1] = useState("");
    const [query2, setQuery2] = useState("");
  

  

    const fetchDetails = async () => {
        try{
            const res = `https://api.github.com/repos/${query1}/${query2}/stats/contributors?since=${date} to=${toDate}`;
             setrepos(res.data)

            // if(!query1 || !query2){
            //     toast.error('No data Entered ❌' ,{position:toast.POSITION.TOP_CENTER})
            // }
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

            <Input
                type="text"
                value={query1}
                required
                onChange={(e) => setQuery1(e.target.value)}
                placeholder="Please Provide the username"
                // className="text-white"
              />
              <Input
                type="text"
                value={query2}
                required
                onChange={(e) => setQuery2(e.target.value)}
                placeholder="Please Provide the repositories name"
                // className="text-white"
              />

            <Input
                type="date"
                value={date}
                required
                onChange={(e) => setDate(e.target.value)}
                placeholder="Please select the date"
                // className="text-white"
              />

              <Input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                placeholder="Please select the date"
                // className="text-white"
              />

    <button className="btn btn-outline-primary userRepo_btn_home" type="button" onClick={fetchDetails}>Search</button>
  

</div>




          <BackTop>
      <div style={style}><i class="fas fa-chevron-up"></i></div>
    </BackTop>
          <Repos repos={repos} />


            </div>
            
            </div>

           
        </>
    )
}

export default Contributer
