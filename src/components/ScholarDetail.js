import React, {useState} from "react";
import { Link } from "react-router-dom"
import styled from 'styled-components';
import img from '../images/examplepic01.png';
import { Container, Row, Col } from 'reactstrap';
import {WiNightCloudyHigh} from "react-icons/wi"
import { Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const ScholarDetail = ({ scholar, loading, error, history })=>{
  const [modal, setModal]=useState(false);
  const toggle=()=>setModal(!modal);
  const ScholarStyle={
      borderBottom: "1px solid #444444",
      paddingTop: '50px',
      paddingBottom:'60px',
      height: '50px',
  }
  const titleSubStyle={
      fontSize: '12px',
      weight: '750px',
      marginLeft: '20px',
      marginTop:'5px',
      textAlign: 'right'
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
  const ScholarTextStyle = {
      fontSize: '30px',
      paddingBottom:'30px'
  }

  const imgStyle = {
    margin:'20px',
    textAlign: 'center'
  }


if(loading || !scholar){
  return null;
}

const { userId, id, title, body } = scholar;

const onClick = e =>{
  history.push('/scholars');
}


return(
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Container style={cardStyle}>
      <Row style={ScholarStyle}>
        <div  style={{fontSize:'30px', textAlign: 'left'}}><WiNightCloudyHigh style={{marginBottom:'10px'}}/> 장학금 세부정보</div>
      </Row>
      <div style={titleStyle}>{title}</div>
      <div style={titleSubStyle}>작성날짜: {userId}</div>
      <div style={titleSubStyle}>첨부파일: 파일제목.hwp</div>
      <hr size="3" noshade></hr>
      <Row style={bodyStyle}>
        {body}
        
        </Row>
        <div style={{textAlign: 'center'}}>
        <img src={img}  height='300px' width='240px' style={imgStyle}/></div>
      <hr size="5" noshade></hr>
      <div style={{textAlign: 'center'}}>
      <Button color="primary" onClick={toggle}>신청하기</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>장학금신청 확인창</ModalHeader>
<ModalBody>{body}</ModalBody>
<ModalFooter>
  <Button color="primary" onClick={toggle}>신청확인</Button>{' '}
  <Button color="secondary" onClick={toggle}>취소</Button>
</ModalFooter>
      </Modal>
     &nbsp; &nbsp;
        <Link to='/scholars'><Button color="secondary">목록으로</Button></Link>
      </div>
    </Container>
  </div>
  );

}

export default ScholarDetail;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;