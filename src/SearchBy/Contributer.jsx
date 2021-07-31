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


const Contributor = () => {
  

  const [query1, setQuery1] = useState("");
  const [query2, setQuery2] = useState("");
  const [user, setUser] = useState(null);
  const [date, setDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const fetchDetails = async () => {
    const url = `https://api.github.com/repos/${query1}/${query2}/stats/contributors?since=${date} to=${toDate}`;

    try {
      const { data } = await Axios.get(url);
      setUser(data);
      console.log({ data });
    } catch (error) {
      toast("Not able to locate user", { type: "error" });
    }
  };


  return (
    <>
    
    <div className="container" >
          
          <div className="userRepo_inputBar_Home">
              <input
                type="text"
                value={query1}
                className="form-control"
                onChange={(e) => setQuery1(e.target.value)}
                placeholder="Please Provide the username"
                // className="text-white"
              />
              <input
                type="text"
                value={query2}
                className="form-control"
                onChange={(e) => setQuery2(e.target.value)}
                placeholder="Please Provide the repositories name"
                
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

             
                <button onClick={fetchDetails} className="btn btn-outline-primary bttn">
                  Fetch User
                </button>
                </div></div>      
           
                <div className="container" >    
          <div>
            <div style={{ display: "flex" }}>
              {user ? (
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                  {user.map((element, index) => {
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
                                {element.author.type}
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
                {/* <img src={cell} height= "400vh"></img> */}
              </p>
              )}
            </div>
          </div> </div>
      
    </>
  );
};

export default Contributor;
