import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand
} from "reactstrap"
import {NavLink as NL} from 'react-router-dom';
import { IoIosSchool } from "react-icons/io"
import Main from "../Main"
import SignUp from "../SignUp";

import LoginForm from '../../containers/LoginForm';
import HeaderContainer from '../../containers/common/HeaderContainer';
import ApplyListContainer from "../../containers/ApplyListContainer";
import ApplyViewer from "../../containers/ApplyViewer";
import ScholarListContainer from "../../containers/ScholarListContainer";
import ScholarViewer from "../../containers/ScholarViewer";

import ScholarEditorContainer from "../../containers/ScholarEditorContainer";
import SelectionContainer from "../../containers/SelectionContainer";
import StudentListContainer from "../../containers/StudentListContainer";

const NavigationBar = ()=>{

  const iconStyle={
    margin:'10px',
    width:'30px',
    height:'30px',
  }

  const brandStyle={
    textColor:'black',
  }
  
  return(
    <div>
      <HeaderContainer />
      <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Nav className="mr-auto" navbar>
          <NavbarBrand className="nav-link ml-5" style={brandStyle}><NavLink href="/main"><IoIosSchool style={iconStyle}/>재단용장학금관리</NavLink></NavbarBrand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <NavItem className="nav-link ml-5">
            <NavLink exact to="/addScholar" tag={NL}>장학금 등록</NavLink>
            </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/selections" tag={NL}>장학생 선발</NavLink>
          </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/main" tag={NL}>사이트이용방법</NavLink>
          </NavItem>
          </ul>
        </div>
        </Nav>
      </Navbar>
      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signin" component={LoginForm} />
        <Route path="/signup" component={SignUp} />
        <Route path="/main" component={Main}/>
        <Route path="/addScholar" component={ScholarEditorContainer}/>
        <Route path="/scholarlist" component={ScholarListContainer} />
        <Route path="/applylist" component={ApplyListContainer} />
        <Route path="/scholarDetail/:id" component={ScholarViewer}/>
        <Route path="/applyDetail/:id" component={ApplyViewer}/>
        <Route path="/selections/:id" component={StudentListContainer}/>
        <Route path="/selections" component={SelectionContainer}/>
      </Switch>
    </div>
  );
}

export default NavigationBar;