import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import {
  Row,
  Container,
  Col,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
  CardBody,
  card
} from "reactstrap";


const UserRepos = () => {



  const [query, setQuery] = useState("");
  const [page, setPage] = useState("");

  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(
      `https://api.github.com/users/${query}/repos?q= &per_page=40&page=${page}`
    );
    setRepos(data);
    console.log(data);
  };



  // useEffect(() => {
  //     fetchRepos()
  // }, [])

  return (
    <>
        
    <div className="container" >
          
          <div className="userRepo_inputBar_Home">
        
              <input
                type="text"
                value={query}
                className="form-control"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Please provide the username"
                // className="text-white"
              />

              <input
                type="number"
                min="1"
                value={page}
                className="form-control"
                onChange={(e) => setPage(e.target.value)}
                placeholder="Enter the page no."
                // className="text-white"
              />

            
                <button onClick={fetchRepos} className="btn btn-outline-primary bttn">
                  Search
                </button>
                </div></div>    
                <div className="container" >
          
         
          {repos? (
            <ListGroup >
              {repos.map((repo) => (
              
                <ListGroupItem key={repo.id}>
                
                <div className="userByRepos_main">
                  <a style={{textDecoration: 'none'}} target="_blank" href={repo.html_url}>
                    <div className="auth-card-header">{repo.name}</div>
                  </a>

                  <div className="auth-label">{repo.language}</div>
                  <div className="auth-label">{repo.description}</div>
                  <div className="auth-label">Size: {repo.size}</div>
                  <div className="auth-label">
                    Open issues: {repo.open_issues}
                  </div>
                  <div className="auth-label">
                    Default branch: {repo.default_branch}
                  </div>
                  <div className="auth-label">
                    create date: {repo.created_at}
                  </div>
                  <div className="auth-label">
                    update date: {repo.updated_at}
                  </div>
                  <div className="auth-label">
                    pushed date: {repo.updated_at}
                  </div>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
            
            ) : (
              <p
                style={{ marginTop: "100px" , paddingLeft: "100px"}}
                className="text-white text-center pt-20"
              >
              </p>
            )}
            
          </div>
     
    </>
  );
};

export default UserRepos;
