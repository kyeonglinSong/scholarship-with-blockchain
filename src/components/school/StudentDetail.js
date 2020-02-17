import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from "react-router-dom"


const StudentDetail = ({ student, loading, scholarId }) =>{
    if(loading || !student){
        return null;
      }

    const titleStyle={
        fontSize:'25px',
        fontWeight:'bold',
        margin:'5px',
    }

    const subTitleStyle={
        fontSize:'20px',
        margin:'5px',
    }

    return (
        <Container style={{margin:'20px auto'}}>
            <Row style={titleStyle}>학생 상세정보</Row>
            <Row style={subTitleStyle}>신청번호 {student.id}번    {student.name} 학생</Row>
            <Row>
                <Col>학교: {student.city}</Col>
                <Col>학과: {student.street}</Col>
                <Col>학점: {student.zipcode}</Col>
                <Col>phone: {student.phone}</Col>
            </Row>
            <Row><br /></Row>
            <Row style={subTitleStyle}>장학금 신청 및 수혜내역</Row>
            <Row>
                테이블을 넣을까 합니다~~~
            </Row>
            <Link to={`/selections/${scholarId}`}><Button>목록으로</Button></Link>
        </Container>
    )
}

export default StudentDetail;