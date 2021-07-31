import React, { useRef, useState } from "react"

import { Link, useHistory } from "react-router-dom"
import { Alert } from "react-bootstrap"
import {auth} from '../Firebase'

const SignUp = () => {
  const history = useHistory();
  const [error, setError] = useState("")


 const [email,setemail] = useState("")
 const [password,setpass] = useState("")
 const [cpass,setcpass] = useState("")


  async function handleSubmit(e) {
    e.preventDefault()

   try {
    setError("")
    const res = await auth.createUserWithEmailAndPassword(email,password)
    alert(`Welcome: ${res.user.email}`)
    history.push("/Login")
   } catch (error) {
     console.log(error);
     setError("Failed to create an account")
   }
  }
    

  return (
    <div className="login_main">
      <div className="login_child">

      {error && <Alert variant="warning">{error}</Alert>}
        <form onSubmit={handleSubmit}>

          <div class="form-group">
          <h4 className="login_head">SignUp</h4>
        <br />
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email..."
              value={email}
              onChange={(e) =>setemail(e.target.value)}
              required
            />
            
          </div>
          <div class="form-group">
           
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password....."
              value={password}
              onChange={(e) =>setpass(e.target.value)}
              required
            />
     
            
          </div>

          <div class="form-group">
           
           <input
             type="password"
             class="form-control"
             id="exampleInputPassword1"
             placeholder="Conform Password...."
             value={cpass}
             onChange={(e) =>setcpass(e.target.value)}
             required
           />
    
           
         </div>
        
         <button type="submit" class="btn btn-outline-success">
            Submit
          </button>

          <br />
<br />
          <Link to="/Login" style={{color:"white",textDecoration: "none"}}>Already have an Account !</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
