import React from "react";
import {
  Navbar, Nav, NavItem, NavLink, NavbarBrand
} from "reactstrap"
import {NavLink as NL} from 'react-router-dom';
import { IoIosSchool } from "react-icons/io"


import HeaderContainer from '../../containers/common/HeaderContainer';
import styled from 'styled-components';


const NavigationStudent = ( {user})=>{

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
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <Nav className="mr-auto" navbar>
          <NavbarBrand className="nav-link ml-5" style={brandStyle}><NavLink href="/student"><IoIosSchool style={iconStyle}/>학생용장학금관리</NavLink></NavbarBrand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <NavItem className="nav-link ml-5">
            <NavLink exact to="/notices" tag={NL}>공지사항</NavLink>
            </NavItem>
            <NavItem className="nav-link ml-5">
            <NavLink exact to="/scholars" tag={NL}>장학금 정보/신청</NavLink>
            </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/applies" tag={NL}>신청현황조회</NavLink>
          </NavItem>
          <NavItem className="nav-link ml-5">
          <NavLink exact to="/student" tag={NL}>사이트이용방법</NavLink>
          </NavItem>
          </ul>
        </div>
        </Nav>
      </Navbar>
      </div>
    </div>
  );
}

export default NavigationStudent;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;