import React from 'react';
import './App.css';
import Home from './components/home.js'
import Nav from './components/nav.js';
import About from './components/about.js';
import AddP from './components/addproduct.js';
import Dash from './components/dashboard_warehouse_manager.js';
// import Update from './components/update.js';
import Contact from './components/contact.js';
// import Map from './components/map.js';

import Purchases from './components/purchases.js';
import Products from './components/dashboard_distributor.js'

import Private from './components/privatecomponent.js'
import Login from './components/login.js'
import Profile from './components/profile.js'
import PurchaseSucc from './components/purchasecompletion.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <>
    
    <Router> <Nav/>
    <Routes>
      <Route element={<Private/>}>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/home" element={<Home/>}>   </Route>
          {/* <Route path="/update"  element={<Update/>}>   </Route> */}
          <Route path="/contact"  element={<Contact/>}>   </Route>
          <Route path="/addproduct" element={<AddP/>}>   </Route>
          <Route path="/purchases" element={<Purchases/>}>   </Route>
          <Route path="/purch" element={<PurchaseSucc/>}>   </Route>
          <Route path="/productdistributor" element={<Products/>}>   </Route>
         
          <Route path="/profile" element={<Profile/>}>   </Route>
        
          <Route path="/dashboard" element={<Dash/>}>   </Route>
          </Route>
          <Route path="/" element={<Login/>}>   </Route>
          
        </Routes>
        </Router>
    </>
  );
}

export default App;
