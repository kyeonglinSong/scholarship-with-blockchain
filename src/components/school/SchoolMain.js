import React, { Component } from "react";
import "./content.css"
import {Button} from 'reactstrap';
import {GiNewspaper} from 'react-icons/gi';
import {FaSearch} from 'react-icons/fa';
import {GoQuestion} from 'react-icons/go';
import {AiOutlineBank} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SchoolMain = ()=>{
  const iconStyle={
    margin:'10px',
    width:'50px',
    height:'50px',
  }
  return(
    <div className="img">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div style={{textalign: 'left', position: 'relative', left: '250px', top: '100px' }}>
      <hr style={{ textalign: 'left', width: '130px',border: '3px solid black', marginLeft: '0px'}}></hr>
      <h2><strong>교직원용 장학금통합관리시스템</strong></h2>
      <h7>온라인 장학금통합관리시스템에 오신 것을 환영합니다.<br/>편리하게 장학금 정보를 얻고 빠르게 신청해보세요!
      </h7>
      </div>
      <br/><br/><br/>
      <div className="content">
        <div className="row"></div>
        <Link to="/scholars"><Button className="RegisterMainButton" size="lg">장학금 등록<br/><GiNewspaper style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/applylies"><Button className="RegisterMainButton" size="lg" color="warning">장학생 선발<br/><FaSearch style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/student"><Button className="RegisterMainButton" size="lg" color="info">사이트 이용안내<br/><GoQuestion style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/student"><Button className="RegisterMainButton" size="lg" color="success">재단용 페이지 이동<br/><AiOutlineBank style={iconStyle}/></Button></Link>
      </div>
    </div>
  );
}

export default SchoolMain;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;