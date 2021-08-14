import React, {useState, useEffect} from 'react';
import axios from "axios";
import {ListGroup, ListGroupItem} from "reactstrap";
import Navbar from '../Components/Navbar';
import { BackTop } from 'antd';

export const RList = ({ repos_url }) => {

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
     
 

    const [repos, setRepos] = useState([])

    const fetchRepos = async() => {
       try {
        const {data} = await axios.get(repos_url ,{
            headers: {
                authorization: "token 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"
              }
        })
        setRepos(data)
      
       } 
       catch (error) {
           console.log(error);
       }
    }

    useEffect(() => {
        fetchRepos()
    },[repos_url])



    return (
        <>
    
        <div className="RList_main">
            <div className="container">
            <ListGroup className="mb-10">
                {
                    repos.map(repo=>(
                        <ListGroupItem key={repo.id} className="list">
                            <a target="_blank" rel="noreferrer" href={repo.html_url}>
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

          
            
            </div>
            <BackTop>
      <div style={style}><i class="fas fa-chevron-up"></i></div>
    </BackTop>
            </div>

          
               
          
        </>
    )
 


}

export default RList;