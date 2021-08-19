import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./Responsive.css"
import "./Css/Profile.css"
import "./Css/Footer.css"
import "./Css/Landing.css"
import App from './App';
import 'antd/dist/antd.css';
import "./bootstrap.min.css"
import "./Css/Contact.css"
import './Css/Home.css'
import './Css/Commit.css'

import { BrowserRouter } from "react-router-dom";

import "./Css/Login.css"


ReactDOM.render(
  <>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


