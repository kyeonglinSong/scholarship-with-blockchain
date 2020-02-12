import React, {Component} from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';
import img from '../images/background.png';
import { Container, Row, Col } from 'reactstrap';
import { AiOutlineRight } from "react-icons/ai";
import { Button } from 'reactstrap';


const ApplyDetail = ({ apply, loading, error, history })=>{

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
    marginLeft:'50px',
    marginBottom:'10px',
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


return(
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Container style={cardStyle}>
      <Row style={ApplyStyle}>
        <Col xs="0.5" style={ApplyTextStyle}><AiOutlineRight style={{marginBottom:'10px'}}/> 신청한 장학금 상세보기</Col>
      </Row>
      <Row style={titleStyle}>{title}</Row>
      <Row style={titleSubStyle}>작성날짜: {userId}</Row>
      <Row style={titleSubStyle}>첨부파일: 파일제목.hwp</Row>
      <hr size="3" noshade></hr>
      <Row style={bodyStyle}>
        {body}
        <img src={img}  height='170px' width='300px' style={imgStyle}/>
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