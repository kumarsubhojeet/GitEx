import React, { useState, useContext, useEffect } from "react";

// import Footer from '../../../../layout/Footer/Footer'

import Axios from "axios";

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

import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";


const UserByCommits = () => {


  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [user, setUser] = useState(null);
  const [date, setDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [page, setPage] = useState("");

  const[cont , setcont] = useState([]);

  const fetchDetails = async () => {
    const url = `https://api.github.com/repos/${query1}/${query2}/commits?since=${date}&until=${toDate}&per_page=100&page=${page}`;

    try {
      const { data } = await Axios.get(url);
      setUser(data);
      
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };


  return (
    <>
       <div className="container" >
          
          <div className="userRepo_inputBar_Home">
              <input
              className="form-control"
                type="text"
                value={query1}
                onChange={(e) => setQuery1(e.target.value)}
                placeholder="Please Provide the username"
                // className="text-white"
              />
              <input
              className="form-control"
                type="text"
                value={query2}
                onChange={(e) => setQuery2(e.target.value)}
                placeholder="Please Provide the repositories name"
                // className="text-white"
              />

              <input
              className="form-control"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Please Provide the date in yyyy-mm-day"
                // className="text-white"
              />

<input
              className="form-control"
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                placeholder="Please Provide the date in yyyy-mm-day"
                // className="text-white"
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
             
                </div></div>        
           
           
     
          <div className="container">
            <div style={{ display: "flex" }}>
              {user ? (
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                  {user.map((element, index) => {
                    const company_info = element.commit.author.email
                    const comp_data = company_info.split("@")
                    
                    const  company_name = comp_data[1].split('.', 1)  
                    
                    const  company = company_name[0].toUpperCase();
                    
                    
                    return (
                      <div className="text-center mt-3 mb-4">
                        <li
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            margin: "20px",
                          }}
                          key={index}
                        >
                          <a
                            style={{ marginTop: "10px" }}
                            target="_blank"
                            href={element.author.html_url}
                            style={{textDecoration: 'none'}}
                          >
                            <img
                              width="200"
                              height="200"
                              className="img-thumbnail"
                              src={element.author.avatar_url}
                            ></img>
                            
                            <CardBody>
                              <div className="auth-card-header">
                                {element.author.login}
                              </div>
                              <div className="auth-label">
                                {element.commit.committer.date}

                              </div>
                    

                              <div className="auth-label">
                             {company === "Users.noreply.github" || company === "GMAIL" || company==='YAHOO' ?
                            <h2>Total</h2> : <h2>Unique</h2> 
                            }
                              </div>

                              <div className="auth-label">
                                {company_name}
                              </div>

                              <div className="auth-label">
                                {element.commit.committer.name}
                              </div>
                            
                            </CardBody>
                        
                        
                          </a>
                        </li>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p
                style={{ marginTop: "100px" , paddingLeft: "100px"}}
                className="text-white text-center pt-20"
              >
             
              </p>
              )}
            </div>
          </div>
      
    
    </>
  );
};

export default UserByCommits;
