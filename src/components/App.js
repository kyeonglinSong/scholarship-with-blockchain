import React from "react";
import { NavLink, Route, Switch, BrowserRouter } from "react-router-dom";

import NavigationBar from "./common/NavigationBar"
import NavigationBarContainer from "../containers/common/NavigatoinContainer";
import Footer from "./common/Footer"


import './App.css';

const App = ()=>{
  return(
    <div style={{overflowX: 'hidden'}}>
      <BrowserRouter>
      <NavigationBarContainer />
      <Footer />
      </BrowserRouter>
    </div>
  );
};


export default App;
