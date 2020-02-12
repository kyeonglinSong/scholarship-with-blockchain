import React from "react";
import {
  Navbar, Nav, NavItem, NavLink
} from "reactstrap"
import styled from 'styled-components';

const HeaderNotLogin = () =>{
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
              <button className="btn btn-outline-light my-2 my-sm-0" type="button">로그인</button>
              </div>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/signup"><button className="btn btn-outline-light my-2 my-sm-0" type="button">회원가입</button></NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://www.ewha.ac.kr"><button className="btn btn-outline-light my-2 my-sm-0" type="button">울학교~</button></NavLink>
            </NavItem>
            </ul>
          </Nav>
          </div>
        </Navbar>
      </header>
    );
}

export default HeaderNotLogin;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;