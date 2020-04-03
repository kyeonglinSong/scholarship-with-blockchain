import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import styled from 'styled-components';

const FormComponent = ({ onChange, content, onPublish, onCancel, originalScholar }) => {

    const style={
        marginTop: '3%',
        marginLeft:'10%',
        marginRight: '10%',
        marginBottom: '5%',
        paddingLeft: '8%',
        paddingRight: '8%',
        paddingTop:  '3%',
        paddingBottom: '3%',
        alignContent: 'center',
        backgroundColor: '#F3F3F3',
        borderRadius: '25px'
    }
    
    
  return (
    <div style={style} >
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div style={{textAlign: 'center'}}>
        <h2 ><strong>장학금 등록</strong></h2>
        <hr style={{border: 'solid 1px gray'}}/>
    </div>
    <Form>
      <FormGroup row style={{marginBottom: '6%', marginTop: '6%'}}>
        <Label for="scholarName" xs="auto"><strong>장학금 이름</strong></Label>
        <Col xs={4}>
        <Input onChange={onChange} type="text" name="scholarshipName" id="scholarName" placeholder="장학금 이름을 입력하세요" value={originalScholar? originalScholar.scholarshipName:null}/>
      </Col>
        <Col xs={1}/>
        <Col xs={4}>
        <Label for="File" ><strong>첨부 파일</strong></Label>
        <Input onChange={onChange} type="file" name="file" id="file" />
        <FormText color="muted">
          한개의 첨부파일을 추가할수있음.
        </FormText>
        </Col>
      </FormGroup>
      
      <FormGroup row style={{marginBottom: '6%', marginTop: '6%'}}>
                <Label xs="auto" for="startDate" ><strong>시작 날짜&nbsp;&nbsp;&nbsp;</strong></Label>
                <Col xs={4}>
                <Input  onChange={onChange} type="date" name="startDate" id="startDate" placeholder="시작날짜를 설정하세요" value={originalScholar? originalScholar.createdDate:null} />
                </Col>
                <Col xs={1}/>
                <Label for="dueDate" xs="auto" ><strong>마감 날짜</strong></Label>
                <Col xs={4}> <Input onChange={onChange} type="date" name="maturityDateTime" id="dueDate" placeholder="마감기한을 설정하세요" value={originalScholar? originalScholar.maturityDateTime:null} /></Col>
      </FormGroup>
      
        <FormGroup row style={{marginBottom: '6%', marginTop: '6%'}}>
            <Label for="sum" xs="auto" ><strong>지급 금액&nbsp;&nbsp;&nbsp;</strong></Label>
            <Col xs={4}>
            <Input onChange={onChange} type="number" name="facevalue" id="sum" placeholder="공란 입력시 전액 장학금" value={originalScholar? originalScholar.facevalue:null}/>
            </Col>
            <Col xs={1}/>
            <Label for="numberOfPeople"xs="auto" ><strong>모집 인원</strong></Label>
           <Col xs={4}> <Input onChange={onChange} type="number" name="totalNum" id="numberOfPeople" placeholder="인원을 입력하세요" value={originalScholar? originalScholar.totalNum:null}/>
          </Col>
        </FormGroup>
        
      <FormGroup style={{marginBottom: '6%', marginTop: '6%'}}>
        <Row>
            <Label for="semester" xs="auto" ><strong>학기 제한&nbsp;&nbsp;&nbsp;</strong></Label>
            <Col xs={4}>
                <Input onChange={onChange} type="number" name="semesterLimitMin" id="startSemester" placeholder="시작 학기"  value={originalScholar? originalScholar.semesterLimitMin:null}/>
            </Col>
            <Col xs={1}/>&nbsp;&nbsp;
            <Col xs={5}>
                <Input onChange={onChange} type="number" name="semesterLimitMax" id="endSemester" placeholder="끝 학기"  value={originalScholar? originalScholar.semesterLimitMax:null}/>
            </Col>
        </Row>
        <FormText color="muted">
            학기를 입력하지 않을경우 제한 없음으로 등록됩니다.
        </FormText>
      </FormGroup>
     
      <div style={{textAlign: 'center'}}>
      <hr style={{border: 'solid 1px gray'}}/>
      <Button color="success"onClick={onPublish}>등록</Button>&nbsp;&nbsp;
      <Button onClick={onCancel}>취소</Button></div>
    </Form>
    </div>
  );
}

export default FormComponent;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;
