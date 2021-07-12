import React from 'react'
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Components/About';
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home';

import UserRepos from './Components/UserRepos';
import Profile from './Components/Profile';
import landingPage from './SearchBy/landingPage';


const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={landingPage} />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/login' component={Login}  />
      <Route exact path='/signup' component={Signup}  />
      <Route exact path='/about' component={About}  />
      <Route exact path='/userRepos' component={UserRepos}  />
      {/* <Route exact path='/Profile' component={Profile}  /> */}
    </Switch>
    </>
  )
}

export default App
