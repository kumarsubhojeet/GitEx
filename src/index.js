import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./Responsive.css"
import "./Css/Profile.css"
import "./Css/Footer.css"
import "./Css/Landing.css"
import App from './App';
import 'antd/dist/antd.css';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


