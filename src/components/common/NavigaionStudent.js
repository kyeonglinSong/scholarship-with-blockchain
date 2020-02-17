import React from "react";
import {Navbar, Nav, NavLink, NavbarBrand } from "reactstrap"
import { Link } from 'react-router-dom';
import LOGO from '../../images/logo.PNG'

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
      <HeaderContainer />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <br/>
      <Navbar color="light" light expand="md" className="mr-auto navbar navbar-expand-lg navbar-light bg-white">
      
        <NavbarBrand style={{fontSize: 'x-large'}} className="nav-link ml-5 black" ><NavLink href="/student"><img src={LOGO} style={iconStyle}/>학생용장학금관리</NavLink></NavbarBrand>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mt-2 mt-lg-0">
                <li className="nav-item" style={{ marginLeft:'100px'}}>
                    <Link className="nav-link" to="/notices">공지사항</Link>
                </li>
                <li className="nav-item" style={{ marginLeft:'100px'}}>
                    <Link className="nav-link" to="/scholars">장학금 정보/신청</Link>
                </li>
                <li className="nav-item" style={{ marginLeft:'100px'}}>
                    <Link className="nav-link" to="/applies">신청현황조회</Link>
                </li>
                <li className="nav-item" style={{ marginLeft:'100px'}}>
                    <Link className="nav-link" to="/student">사이트이용방법</Link>
                </li>
            </ul>
        </div>
        
      </Navbar>
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

