import React, {useState, createContext} from 'react'
import {NavLink , Link  } from "react-router-dom";
import {CopyToClipboard} from "react-copy-to-clipboard"
import {toast} from "react-toastify"

const Repos = (props) => {
    const { repos } = props;

    const namecopied = ()=>{
        toast.dark('Paste the Name  👍' ,{position:toast.POSITION.TOP_RIGHT})
       
    }
   
    return (
        <>
            <div className="row">
                {
                    repos.map(item=>(
                        <div className="col-md-3">
                            <div className="card my-2">
                                <img src={item.avatar_url} className="img-fluid w-50 mt-3 mx-auto rounded-circle"
                                alt="Img-Error" />
                                <div className="card-body">

                                   
                                    <h4 className="item_login"> {item.login}</h4>
                                  
                                    <CopyToClipboard text={item.login}> 
                                <Link to="/userRepos" onClick={namecopied} className="link" >Details</Link>
                                    </CopyToClipboard>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            
               
          
        </>
    )
}

export default Repos;
