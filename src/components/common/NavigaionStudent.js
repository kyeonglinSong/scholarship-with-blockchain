import React from "react";
import { NavLink, NavbarBrand } from "reactstrap"
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
    color:'#ffffff',
  }
  
  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div>
      <HeaderContainer />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavbarBrand className="nav-link mr-auto" style={brandStyle}><NavLink href="/student"><img src={LOGO} style={iconStyle}/>학생용장학금관리</NavLink></NavbarBrand>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item" style={{ marginLeft:'20px'}}>
                    <Link className="nav-link" to="/notices">공지사항</Link>
                </li>
                <li className="nav-item" style={{ marginLeft:'20px'}}>
                    <Link className="nav-link" to="/scholars">장학금 정보/신청</Link>
                </li>
                <li className="nav-item" style={{ marginLeft:'20px'}}>
                    <Link className="nav-link" to="/applies">신청현황조회</Link>
                </li>
                <li className="nav-item" style={{ marginLeft:'20px'}}>
                    <Link className="nav-link" to="/student">사이트이용방법</Link>
                </li>
            </ul>
        </div>
      </nav>
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

