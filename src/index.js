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

reportWebVitals();
