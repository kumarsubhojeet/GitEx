import React,{useEffect,useState} from 'react'
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home';

import UserRepos from './Components/UserRepos';
import Profile from './Components/Profile';
import LandingPage from './SearchBy/landingPage';
import ByLang from './SearchBy/ByLanguage'
import RList from './Components/RList'
import {auth} from "./Firebase"
import PleaseLogin from './Components/PleaseLogin'
import Logout from './Components/Login'
import Contact from './Components/Contact'
import Contributer from './SearchBy/Contributer.jsx'
import Commite from "./SearchBy/Commite.jsx"
import ForgotPAssword from './Components/ForgotPAssword'
import UserByRepos from './SearchBy/UserByRepos'
import ReposLang from './SearchBy/ReposLang'
import SearchByRepos from './SearchBy/SearchByRepos.jsx'

const App = () => {

  const [user,setuser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) setuser(user)
      else setuser(null)
    })
  }, [])

  return (
    <>
 
    {
         user?
         <>
       <Navbar user={user} />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/About' component={About}  />
      <Route exact path='/userRepos' component={UserRepos}  />
      <Route exact path='/ByLang' component={ByLang}  />
      <Route exact path='/RList' component={RList}  />
      <Route exact path='/Contact' component={Contact} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/Contributer' component={Contributer} />
      <Route exact path='/Commite' component={Commite} />
      <Route exact path='/UserByRepos' component={UserByRepos} />
      <Route exact path='/ReposLang' component={ReposLang} />
      <Route exact path='/SearchByRepos' component={SearchByRepos} />
      </>
         :
         <>
          <Navbar user={user} />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/About' component={About}  />
         
         </>
       

       }
       <Route exact path='/Login' component={Login} />
       <Route exact path='/Signup' component={Signup} />
       <Route exact path='/PleaseLogin' component={PleaseLogin} />
       <Route exact path='/ForgotPAssword' component={ForgotPAssword} />
  
     
   
    </>
  )
}

export default App
