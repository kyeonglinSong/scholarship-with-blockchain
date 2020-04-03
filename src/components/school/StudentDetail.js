import React from 'react'
import { Table, Badge, Container, Row, Col, Button } from 'reactstrap';
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
            <Row style={titleStyle}><Badge color="info">학생정보 출력</Badge></Row>
            <Row>
            <Table borderless size="sm">
                    <thead>
                        <tr>
                            <th>신청번호 {student.id}</th>
                            <th>{student.name} 학생</th>
                            <th>{student.university} 학교</th>
                            <th>{student.grade}/4.3</th>
                            <th>등록금 : {student.tution}</th>
                        </tr>
                    </thead>
                </Table>
            </Row>
            <br/><br/>
            <Row style={titleStyle}><Badge color="info">장학금 신청 및 수혜내역</Badge></Row>
            <Row>
                <Table size="sm">
                    <thead>
                        <tr>
                            <th> </th>
                            <th>장학금명</th>
                            <th>상태</th>
                            <th>지급 일시</th>
                            <th>지급 금액(원)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>A장학금</td>
                            <td>지급 완료</td>
                            <td>2019-09-18</td>
                            <td>300,000</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>B장학금</td>
                            <td>지급 완료</td>
                            <td>2019-10-28</td>
                            <td>2,000,000</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>C장학금</td>
                            <td>반려</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>D장학금</td>
                            <td>신청완료</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
            <br/>
            <Link to={`/selections/${scholarId}`}><Button>목록으로</Button></Link>
        </Container>
    )
}

export default StudentDetail;