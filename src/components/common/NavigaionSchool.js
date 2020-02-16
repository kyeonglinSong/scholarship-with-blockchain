
import React from "react";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand
} from "reactstrap"
import {NavLink as NL, withRouter } from 'react-router-dom';
import LOGO from '../../images/logo.PNG';

import HeaderContainer from '../../containers/common/HeaderContainer';
import styled from 'styled-components';


import HeaderContainer from '../../containers/common/HeaderContainer';
import styled from 'styled-components';

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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div>
      <HeaderContainer />
<<<<<<< HEAD
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Nav className="mr-auto" navbar>
          <NavbarBrand className="nav-link ml-5" style={brandStyle}><NavLink href="/"><img src={LOGO} style={iconStyle}/>교직원용장학금관리</NavLink></NavbarBrand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <NavItem className="nav-link ml-5">
            <NavLink exact to="/notices" tag={NL}>공지사항</NavLink>
            </NavItem>
            <NavItem className="nav-link ml-5">
            <NavLink exact to="/scholarships" tag={NL}>장학금등록</NavLink>
            </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/selections" tag={NL}>장학생선발</NavLink>
          </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/student" tag={NL}>사이트이용방법</NavLink>
          </NavItem>
          </ul>
        </div>
      </nav>
      </div>
    </div>
  );
}

export default NavigationSchool;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;

