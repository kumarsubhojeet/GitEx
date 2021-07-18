import React, {useState, useEffect} from 'react';
import axios from "axios";
import {ListGroup, ListGroupItem} from "reactstrap";
import Navbar from '../Components/Navbar';

export const RList = ({ repos_url }) => {
 

    const [repos, setRepos] = useState([])

    const fetchRepos = async() => {
       try {
        const {data} = await axios.get(repos_url)
        setRepos(data)
        console.log(data);
       } catch (error) {
           console.log(error);
       }
    }

    useEffect(() => {
        fetchRepos()
    }, [repos_url])



    return (
        <>
      
        <div className="RList_main">
            <div className="container">
            <ListGroup className="mb-10">
                {
                    repos.map(repo=>(
                        <ListGroupItem key={repo.id} className="list">
                            <a target="_blank" href={repo.html_url}>
                    <h3 className="text_primary">{repo.name}</h3>
                    </a>

                    <h4 className="text_secondary">{repo.language}</h4>
                    <h5 className="text_info">{repo.description}</h5>
                    <h5 className="text_info">Open issues: {repo.open_issues}</h5>
                    <h5 className="text_info">Default branch: {repo.default_branch}</h5>
                    <h5 className="text_info">create date: {repo.created_at}</h5>
                    <h5 className="text_info">update date: {repo.updated_at}</h5>
                    <h5 className="text_info">pushed date: {repo.updated_at}</h5>
                        </ListGroupItem>
                    ))
                }
                   </ListGroup>
            </div></div>

            
               
          
        </>
    )
 


}

export default RList;