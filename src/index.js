import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CardComponent from './component/CardComponent';
import NavbarComponent from './component/NavbarComponent';
import CardContainer from './container/CardContainer';
import AboutMe from './container/AboutMe';

ReactDOM.render(
  <React.StrictMode>
    <AboutMe />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
