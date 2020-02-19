import React, {Component} from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';
import img from '../images/background.png';
import { Container, Row, Col } from 'reactstrap';
import { WiNightCloudyHigh } from "react-icons/wi";
import { Button } from 'reactstrap';
import {Progress} from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";


const ApplyDetail = ({ scholars, apply, loading, error, history })=>{

  const ApplyStyle={
      borderBottom: "1px solid #444444",
      padding: "50px",
      paddingBottom:'60px',
      height: '50px',
      marginLeft: "10px"
  }
  const titleSubStyle={
      fontSize: '12px',
      weight: '750px',
      marginLeft: '20px',
      marginTop:'5px',
  }
  const titleStyle={
    fontSize: '20px',
    fontWeight: 'bold',
    weight: '750px',
    marginLeft:'auto',
    marginBottom:'10px',
    marginTop:'5px',
}
  const bodyStyle = {
    margin:'10px',
  }
  const cardStyle = {
      width: '83%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom:'50px'
  }
  const ApplyTextStyle = {
      fontSize: '30px',
      paddingBottom:'30px'
  }

  const imgStyle = {
    margin:'20px',
  }


if(loading || !apply){
  return null;
}

const { userId, id, title, body } = apply;
/* //내가 신청한 정보
const {studentName, studentId, schoolId, completeSemester, priorGrade, tuition, college, major, scholarshipId}=apply;
const myApply=()=>(
  {function(){
    if(apply.state==="applyDone")
      return <div style={{textAlign: 'center'}}><Progress type="circle" percent={40}/>신청완료<br/>결과를 기다려주세요.</div>
    else if(apply.state==="returned")
      return <div style={{textAlign: 'center'}}><Progress type="circle" percent={33} status="error"/>자격 미달.<br/>해당 장학금 공고를 다시 확인하세요.</div>
    else if(apply.state==="selected")
      return <div style={{textAlign: 'center'}}><Progress type="circle" percent={100} status="success"/>축하합니다.<br/>장학생으로 선발되었습니다. 지급 완료. </div>
    else if(apply.state==="notSelected")
      return  <div style={{textAlign: 'center'}}>
   }
    
  }
);
*/


return(
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Container style={cardStyle}>
      <Row style={ApplyStyle}>
        <div style={{fontSize: '30px', textAlign: 'left'}}><WiNightCloudyHigh style={{marginBottom:'10px'}}/> 장학금 신청 정보</div>
      </Row>
      <div style={titleStyle}>{title}</div>
      <div style={titleSubStyle}>여기엔 뭘 쓸까요. </div>
      <hr size="3" noshade></hr>
      <Row style={bodyStyle}>
        <Progress  percent={40} status="success"/>
       <div style={{textAlign: 'center', marginLeft: '40%'}}> <br/>신청완료<br/>결과를 기다려주세요.<br/></div>
      <Progress percent={28} status="error"/><br/><div style={{textAlign: 'center', marginLeft: '40%'}}>자격 미달.<br/>해당 장학금 공고를 다시 확인하세요.</div>
        {/*
        {myApply}
        */}
       
      </Row>
      <hr size="5" noshade></hr>
      <Row>
        <Col sm="3" md={{ size:3, offset:10}}><Button color="link"><Link to='/applies'>목록으로</Link></Button></Col>
      </Row>
    </Container>
  </div>
  );

}

export default ApplyDetail;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;