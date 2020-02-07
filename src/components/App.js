import React from "react";
import { NavLink, Route, Switch, BrowserRouter } from "react-router-dom";

import NavigationBar from "./common/NavigationBar"
import Footer from "./common/Footer"


import './App.css';

const App = ()=>{
  return(
    <div>
      <BrowserRouter>
      <NavigationBar />
      <Footer />
      </BrowserRouter>
    </div>
  );
};


export default App;
