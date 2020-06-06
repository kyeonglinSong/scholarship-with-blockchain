import React from "react";
import {  Navbar, Nav, NavItem, NavLink } from "reactstrap"
import styled from 'styled-components';

const HeaderStudentLogin = ({ user, onClick }) =>{

    return(
      <header style={{ width:'100%' }}>
        <Navbar className="navbar navbar-expand-md navbar-light ml-auto" expand="xs" style={{backgroundColor: "#022601", height: '40px', padding: '10px'}}>
        <div className="ml-auto" id="navbarSupportedContent">
          <Nav >
          <ul className="navbar-nav">
            <NavItem>
            <NavLink href="/"><button className="btn" style={{color: 'white'}}type="button" onClick={onClick}>로그아웃</button></NavLink>
            </NavItem> 
            <NavItem>
            <NavLink href="/https://github.com/reactstrap/reactstrap"><button className="btn" style={{color: 'white'}}type="button">한국장학재단</button></NavLink>
            </NavItem>
            </ul>
          </Nav>
          </div>
        </Navbar>
      </header>
    );
}

export default HeaderStudentLogin;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;