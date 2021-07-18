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
import ByLang from './SearchBy/ByLanguage'
import RList from './Components/RList'

const App = () => {
  return (
    <>
    
    <Switch>
      <Route exact path='/' component={landingPage} />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/login' component={Login}  />
      <Route exact path='/signup' component={Signup}  />
      <Route exact path='/about' component={About}  />
      <Route exact path='/userRepos' component={UserRepos}  />
      <Route exact path='/ByLang' component={ByLang}  />
      <Route exact path='/RList' component={RList}  />
    </Switch>
    </>
  )
}

export default App
