import React from "react";
import {
  Navbar, Nav, NavItem, NavLink
} from "reactstrap"
import styled from 'styled-components';

const HeaderStudentLogin = ({ user, onClick }) =>{

    return(
      <header>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Navbar className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#022601"}}>
        <div className="collapse navbar-collapse mr-auto" id="navbarSupportedContent">
          <Nav >
          <ul className="navbar-nav ml-auto">
            <NavItem>
            <NavLink href="/signin">
              <div className="btn-group mr-2" role="group" area-label="First group">
              <button className="btn btn-outline-light my-2 my-sm-0" type="button">마이페이지</button>
              </div>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/"><button className="btn btn-outline-light my-2 my-sm-0" type="button" onClick={onClick}>로그아웃</button></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/https://github.com/reactstrap/reactstrap"><button className="btn btn-outline-light my-2 my-sm-0" type="button">한국장학재단</button></NavLink>
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