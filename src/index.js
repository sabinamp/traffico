import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About';
import Howto from './components/Howto';
import Contact from './components/contact/Contact';

import Error404 from './components/reusablecomp/Error404';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
        <Route exact path="/"  element={<App/>}  ></Route> 
        <Route path="/about"  element={<About/>}  > </Route>
        <Route path="/howtoapply" element={<Howto/>} />
       {/* <Route path="/faq" element={<Faq/>} />*/}
        <Route path="/contact" element={<Contact/>} />  
        <Route path="*" element={<Error404/>} />           
    </Routes>
    </BrowserRouter>    
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
