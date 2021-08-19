import React from "react";
import { Link, useHistory } from "react-router-dom"
import {auth} from '../Firebase'
import { Alert } from "react-bootstrap"



const Login = () => {
  const history = useHistory();
      const [Email,setEmail] = React.useState("");
      const [Pass,setPass] = React.useState("");

      const [error, setError] = React.useState("")

      async function handleSubmit(e) {
        e.preventDefault()
    
       try {
        setError("")
        const res = await auth.signInWithEmailAndPassword(Email,Pass)
        
        history.push("/")
       } catch (error) {
         console.log(error);
         setError("Try Again !")
       }
      }

  return (
    <div className="login_main">
      <div className="login_child">

      {error && <Alert variant="light">{error}</Alert>}
        <form onSubmit={handleSubmit}>

          <div class="form-group">


        
        
       <h4 className="login_head">Login</h4>
       <br />

            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email..."
              value={Email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            
          </div>
          <div class="form-group">
           
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password....."
              value={Pass}
              onChange={(e)=>setPass(e.target.value)}
            />
          </div>
        
          <button type="submit" class="btn btn-outline-primary">
            Login
          </button>
<br />
<br />
          <Link to="/Signup" style={{color:"Black" , textDecoration: "none" , fontSize:'19px'}}>Free SignUp</Link>
       <br />
       <br />
          <Link to="/ForgotPAssword" style={{color:"Black" , textDecoration: "none" , fontSize:'19px'}}>Reset Password <span><i class="fas fa-key keyy"></i></span> </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
