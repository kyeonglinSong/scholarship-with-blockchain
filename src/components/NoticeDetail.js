import React, {Component} from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';
import img from '../images/background.png';
import { Container, Row, Col } from 'reactstrap';
import {WiNightCloudyHigh} from "react-icons/wi"
import { Button } from 'reactstrap';

import MiddleBar from "./common/MiddleBar";

const Notice = ({ notice, loading, error, history })=>{

  const NoticeStyle={
      borderBottom: "3px solid #444444",
      
      paddingTop: '50px',
      paddingBottom:'60px',
      height: '50px',
  }
  const titleSubStyle={
      fontSize: '12px',
      weight: '750px',
      marginLeft: '20px',
      marginTop:'5px',
      textAlign: 'right',
  }
  const titleStyle={
    fontSize: '20px',
    fontWeight: 'bold',
    weight: '750px',
    textAlign: 'center',
    marginTop:'5px',
}
  const bodyStyle = {
    margin:'10px'
  }
  const cardStyle = {
      width: '850px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom:'50px'
  }
  const NoticeTextStyle = {
      fontSize: '30px',
      paddingBottom:'30px'
  }

  const imgStyle = {
    margin:'20px',
  }


if(loading || !notice){
  return null;
}

const { userId, id, title, body } = notice;

const onClick = e =>{
  history.push('/noticelist');
}


return(
  <div>
    <Container style={cardStyle}>
      <Row style={NoticeStyle}>
        <div style={{fontSize:'30px', textAlign: 'left'}}><WiNightCloudyHigh style={{marginBottom:'10px'}}/> 공지사항</div>
      </Row>
      <div style={titleStyle}>{title}</div>
      <div style={titleSubStyle}>작성날짜: {userId}</div>
      <div style={titleSubStyle}>첨부파일: 파일제목.hwp</div>
      <hr size="3" noshade></hr>
      <Row style={bodyStyle}>
        {body}
        <img src={img}  height='170px' width='300px' style={imgStyle}/>
        </Row>
      <hr size="5" noshade></hr>
      <div style={{textAlign: 'center'}}>
        <Link to='/noticeList'><Button outline color="secondary">목록으로</Button></Link>
      </div>
    </Container>
  </div>
  );

}

export default Notice;
