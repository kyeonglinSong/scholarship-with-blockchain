import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import styled from 'styled-components';

import Footer from "./common/Footer"
import MainContainer from '../containers/common/MainContainer';
import LoginContainer from '../containers/common/LoginContainer';
import MainSchool from "./school/MainSchool";
import MainStudent from "./student/MainStudent";



import './App.css';

const App = ()=>{

  

  return(
    <div style={{overflowX: 'hidden'}}>
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
