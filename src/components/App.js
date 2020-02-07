import React from "react";
import { NavLink, Route, Switch, BrowserRouter } from "react-router-dom";

import Footer from "./common/Footer"
import NavigationContainer from '../containers/common/NavigationContainer'
import HeaderContainer from '../containers/common/HeaderContainer';

import Main from "./Main"

import NoticeViewer from "../containers/NoticeViewer";
import NoticeListContainer from "../containers/NoticeListContainer";
import ApplyListContainer from "../containers/ApplyListContainer";
import ApplyViewer from "../containers/ApplyViewer";
import ScholarListContainer from "../containers/ScholarListContainer";
import ScholarViewer from "../containers/ScholarViewer";


import './App.css';

const App = ()=>{
  return(
    <div>
      <BrowserRouter>
        <NavigationContainer />
      </BrowserRouter>
      <Footer />
    </div>
  );
};


export default App;
