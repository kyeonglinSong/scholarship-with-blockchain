import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

const FormComponent = ({ onChange, content, onPublish, onCancel }) => {

    const style={
        padding:'20px',
        margin:'20px',
    }

    console.log(content);
    
  return (
    <div style={style}>
        <h2>장학금 등록</h2>
    <Form>
      <FormGroup>
        <Label for="scholarName" sm={2}>장학금 이름</Label>
        <Input onChange={onChange} type="text" name="scholarName" id="scholarName" placeholder="장학금 이름을 입력하세요" />
      </FormGroup>
      <Row form>
          <Col md={6}>
            <FormGroup>
                <Label for="startDate" sm={2}>시작날짜</Label>
                <Input onChange={onChange} type="date" name="startDate" id="startDate" placeholder="시작날짜를 설정하세요" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
                <Label for="dueDate" sm={2}>마감날짜</Label>
                <Input onChange={onChange} type="date" name="dueDate" id="dueDate" placeholder="마감기한을 설정하세요" />
            </FormGroup>
          </Col>
      </Row>
      <Row>
        <Col>
        <FormGroup>
            <Label for="sum" sm={2}>금액</Label>
            <Input onChange={onChange} type="number" name="sum" id="sum" placeholder="금액을 입력하세요"/>
            <FormText color="muted">
            금액을 입력하지 않을 시 등록금 전액 장학금으로 등록됩니다.
            </FormText>
        </FormGroup>
        </Col>
        <Col>
        <FormGroup>
            <Label for="numberOfPeople"sm={2}>인원</Label>
            <Input onChange={onChange} type="number" name="numberOfPeople" id="numberOfPeople" placeholder="인원을 입력하세요"/>
        </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Row>
            <Label for="semester" sm={2}>학기 제한</Label>
            <Col md={5}>
                <Input onChange={onChange} type="number" name="startSemester" id="startSemester" placeholder="시작 학기" />
            </Col>
            <Col md={5}>
                <Input onChange={onChange} type="number" name="endSemester" id="endSemester" placeholder="끝 학기" />
            </Col>
        </Row>
        <FormText color="muted">
            학기를 입력하지 않을경우 제한 없음으로 등록됩니다.
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="File">첨부파일</Label>
        <Input onChange={onChange} type="file" name="file" id="file" />
        <FormText color="muted">
          한개의 첨부파일을 추가할수있음.
        </FormText>
      </FormGroup>
      <Button onClick={onPublish}>등록</Button>
      <Button onClick={onCancel}>취소</Button>
    </Form>
    </div>
  );
}

export default FormComponent;