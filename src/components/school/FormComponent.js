import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

const FormComponent = ({ onChange, content, onPublish, onCancel, originalScholar }) => {

    const style={
        marginTop: '3%',
        marginLeft:'10%',
        marginRight: '10%',
        marginBottom: '5%',
        alignContent: 'center'
    }

    console.log(content);

    
  return (
    <div style={style}>
      <div style={{textAlign: 'center'}}>
        <h2><strong>장학금 등록</strong></h2>
        <hr style={{border: 'solid 1px gray'}}/>
    </div>
    <Form>
      <FormGroup row>
        <Label for="scholarName" sm={2}>장학금 이름</Label>
        <Col sm={4}>
        <Input onChange={onChange} type="text" name="scholarName" id="scholarName" placeholder="장학금 이름을 입력하세요" value={originalScholar? originalScholar.title:null}/>
      </Col>
      </FormGroup>
      
      <FormGroup row>
                <Label sm={2} for="startDate" >시작날짜</Label>
                <Col sm={4}>
                <Input  onChange={onChange} type="date" name="startDate" id="startDate" placeholder="시작날짜를 설정하세요" value={originalScholar? originalScholar.createdAt:null} />
                </Col>
                <Label for="dueDate" sm={2}>마감날짜</Label>
                <Col md={4}> <Input onChange={onChange} type="date" name="dueDate" id="dueDate" placeholder="마감기한을 설정하세요" value={originalScholar? originalScholar.updatedAt:null} /></Col>
      </FormGroup>
      
        <FormGroup row>
            <Label for="sum" sm={2}>금액</Label>
            <Col sm={4}>
            <Input onChange={onChange} type="number" name="sum" id="sum" placeholder="공란 입력시 전액 장학금" value={originalScholar? originalScholar.title:null}/>
            </Col>
            
            <Label for="numberOfPeople"sm={2}>인원</Label>
           <Col sm={4}> <Input onChange={onChange} type="number" name="numberOfPeople" id="numberOfPeople" placeholder="인원을 입력하세요" value={originalScholar? originalScholar.id:null}/>
          </Col>
        </FormGroup>
        
      <FormGroup>
        <Row>
            <Label for="semester" sm={2}>학기 제한</Label>
            <Col md={5}>
                <Input onChange={onChange} type="number" name="startSemester" id="startSemester" placeholder="시작 학기"  value={originalScholar? originalScholar.id:null}/>
            </Col>
            <Col md={5}>
                <Input onChange={onChange} type="number" name="endSemester" id="endSemester" placeholder="끝 학기"  value={originalScholar? originalScholar.id:null}/>
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
      <div style={{textAlign: 'center'}}>
      <hr style={{border: 'solid 1px gray'}}/>
      <Button color="success"onClick={onPublish}>등록</Button>&nbsp;&nbsp;
      <Button onClick={onCancel}>취소</Button></div>
    </Form>
    </div>
  );
}

export default FormComponent;