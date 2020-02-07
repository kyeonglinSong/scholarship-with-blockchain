import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand
} from "reactstrap"
import {NavLink as NL} from 'react-router-dom';
import { IoIosSchool } from "react-icons/io"

import Main from "../Main"

import HeaderContainer from '../../containers/common/HeaderContainer';
import NoticeViewer from "../../containers/NoticeViewer";
import NoticeListContainer from "../../containers/NoticeListContainer";
import ApplyListContainer from "../../containers/ApplyListContainer";
import ApplyViewer from "../../containers/ApplyViewer";
import ScholarListContainer from "../../containers/ScholarListContainer";
import ScholarViewer from "../../containers/ScholarViewer";

const NavigationSchool = ( {user})=>{

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
      <div>
      <HeaderContainer />
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Nav className="mr-auto" navbar>
          <NavbarBrand className="nav-link ml-5" style={brandStyle}><NavLink href="/"><IoIosSchool style={iconStyle}/>교직원용장학금관리</NavLink></NavbarBrand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <NavItem className="nav-link ml-5">
            <NavLink exact to="/notices" tag={NL}>공지사항</NavLink>
            </NavItem>
            <NavItem className="nav-link ml-5">
            <NavLink exact to="/scholars" tag={NL}>장학금 정보/신청</NavLink>
            </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/applylies" tag={NL}>신청현황조회</NavLink>
          </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/student" tag={NL}>사이트이용방법</NavLink>
          </NavItem>
          </ul>
        </div>
        </Nav>
      </Navbar>
      <Switch>
          <Route path="/" component={Main} />
          <Route path="/notices" component={NoticeListContainer}/>
          <Route path="/notices/:id" component={NoticeViewer}/>
          <Route path="/scholars" component={ScholarListContainer} />
          <Route path="/scholars/:id" component={ScholarViewer}/>
          <Route path="/applies" component={ApplyListContainer} />
          <Route path="/applies/:id" component={ApplyViewer}/>
        </Switch>
      </div>
    </div>
  );
}

export default NavigationSchool;