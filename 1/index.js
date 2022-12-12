import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import Layout from './Components/Layout';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCust from './Components/Register';
import Login from './Components/Login';
import Dash from './Components/Dash';
import ViewDep from './Components/ViewDep';
import AddDept from './Components/AddDept';
import Dropdown from './Components/Dropdown';
import ViewEvent from './Components/Events';
 function Application() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="register" element={<AddCust/>}/>
              <Route path="login" element={<Login/>}/>
              <Route path="dashboard/:username" element={<Dash/>}/>
              <Route path="dashboard" element={<Dash/>}/>
              <Route path="view/:id" element={<ViewDep/>}/>
              <Route path="add/:id" element={<AddDept/>}/>
              <Route path="events/:id" element={<ViewEvent/>}/>

              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Application/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
