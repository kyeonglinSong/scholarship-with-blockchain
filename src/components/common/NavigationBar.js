import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand
} from "reactstrap"
import {NavLink as NL} from 'react-router-dom';
import { IoIosSchool } from "react-icons/io"
import HeaderNotLogin from "./HeaderNotLogin";
import Main from "../Main"
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import NoticeList from "../NoticeList";
import ScholarList from "../ScholarList";
//import MyApplyList from "../MyApplyList";
import Notice from "../NoticeDetail";
import ScholarDetail from "../ScholarDetail";
import WriteComponent from "../WriteComponent";

import LoginForm from '../../containers/LoginForm';
import HeaderContainer from '../../containers/common/HeaderContainer';
import NoticeViewer from "../../containers/NoticeViewer";
import NoticeListContainer from "../../containers/NoticeListContainer";
import ApplyListContainer from "../../containers/ApplyListContainer";
import ApplyViewer from "../../containers/ApplyViewer";
import ScholarListContainer from "../../containers/ScholarListContainer";
import ScholarViewer from "../../containers/ScholarViewer";
import styled from 'styled-components';

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <HeaderContainer />
      <div>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Nav className="mr-auto" navbar>
          <NavbarBrand className="nav-link ml-5" style={brandStyle}><NavLink href="/main"><IoIosSchool style={iconStyle}/>학생용장학금관리</NavLink></NavbarBrand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <NavItem className="nav-link ml-5">
            <NavLink exact to="/noticelist" tag={NL}>공지사항</NavLink>
            </NavItem>
            <NavItem className="nav-link ml-5">
            <NavLink exact to="/scholarlist" tag={NL}>장학금 정보/신청</NavLink>
            </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/applylist" tag={NL}>신청현황조회</NavLink>
          </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/main" tag={NL}>사이트이용방법</NavLink>
          </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/writeNotice" tag={NL}>공지쓰러가자~!</NavLink>
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
        <Route path="/noticelist" component={NoticeListContainer}/>
        <Route path="/scholarlist" component={ScholarListContainer} />
        <Route path="/applylist" component={ApplyListContainer} />
        <Route path="/notice/:id" component={NoticeViewer}/>
        <Route path="/scholarDetail/:id" component={ScholarViewer}/>
        <Route path="/applyDetail/:id" component={ApplyViewer}/>
        <Route path="/writeNotice" component={WriteComponent}/>
      </Switch>
    </div>
  );
}

export default NavigationBar;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;