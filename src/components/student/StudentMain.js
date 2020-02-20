import React from "react";
import "./content2.css"
import {Button} from 'reactstrap';
import {GiNewspaper} from 'react-icons/gi';
import {FaSearch} from 'react-icons/fa';
import {GoQuestion} from 'react-icons/go';
import {AiOutlineBank} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Main = ()=>{
  const iconStyle={
    margin:'10px',
    width:'50px',
    height:'50px',
  }
  
  return(
    <div className="img">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div style={{textalign: 'left', position: 'relative', marginLeft: '7%', top: '10%' }}>
      <hr style={{ textalign: 'left', width: '130px',border: '3px solid black', marginLeft: '0px'}}></hr>
      <h2 style={{fontSize: '30px'}}><strong>장학금통합관리시스템</strong></h2>
      <h7 className="h7Style">
        <br/>온라인 장학금통합관리시스템에 오신 것을 환영합니다.<br/>편리하게 장학금 정보를 얻고 빠르게 신청해보세요.
      </h7>
      </div>
      <br/><br/><br/>
      <div className="contentnew">
        <Link to="/scholars"><Button className="RegisterMainButton" size="lg" style={{backgroundColor:'#8cb09d', border: 'none', color: 'black', boxShadow:'5px 5px 5px #999999', marginRight:'30px'}}><a style={{fontWeight:'bold'}}>장학금정보/신청</a><br/><GiNewspaper style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/applies"><Button className="RegisterMainButton" size="lg" style={{backgroundColor:'#9fa947', border: 'none', color: 'black', boxShadow:'5px 5px 5px #999999', marginRight:'30px'}}><a style={{fontWeight:'bold'}}>신청현황조회</a><br/><FaSearch style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/student"><Button className="RegisterMainButton" size="lg" style={{backgroundColor:'#d7c369', border: 'none', color: 'black', boxShadow:'5px 5px 5px #999999', marginRight:'30px'}}><a style={{fontWeight:'bold'}}>사이트 이용안내</a><br/><GoQuestion style={iconStyle}/></Button></Link>&nbsp;&nbsp;&nbsp;
        <Link to="/student"><Button className="RegisterMainButton" size="lg" style={{backgroundColor:'#d7c399', border: 'none', color: 'black', boxShadow:'5px 5px 5px #999999'}}><a style={{fontWeight:'bold'}}>재단용 페이지 이동</a><br/><AiOutlineBank style={iconStyle}/></Button></Link>
      </div>
    </div>
  );
}

export default Main;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;