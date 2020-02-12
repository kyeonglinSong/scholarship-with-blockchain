import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Footer from "./common/Footer"
import MainContainer from '../containers/common/MainContainer';
import LoginContainer from '../containers/LoginContainer';
import MainSchool from "./school/MainSchool";
import MainStudent from "./student/MainStudent";
import styled from 'styled-components';



import './App.css';

const App = ()=>{
  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <BrowserRouter>
        <MainContainer />
          <Route path="/login" component={LoginContainer} />
          <Route path="/school" component={MainSchool} />
          <Route path="/student" component={MainStudent} />
      </BrowserRouter>
      
      <Footer />
    </div>
  );
};


export default App;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;