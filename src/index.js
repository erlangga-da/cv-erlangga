import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import AboutMe from './container/AboutMe';
import Header from './container/Header';
import DoubleContainer from './container/DoubleContainer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <AboutMe />
    <DoubleContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();