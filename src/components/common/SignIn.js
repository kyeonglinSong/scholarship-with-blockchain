import React from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import styled from 'styled-components';
import LOGO from '../../images/logo.PNG'
import '../content2.css';


const SignIn = ({form, onChange, onSubmit})=>{

  const inputStyle = {
    width:'33.3%',
    margin:'auto'
  }

  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div style={{overflowX: 'hidden'}}>
      <br/><br/><br/>
      <div style={{textAlign: 'center'}}><img className="center" src={LOGO} style={{width: '150px'}}/><br/></div>
      <span style={{textAlign:'center'}}>
        <Form onSubmit={onSubmit} >
          <Row style={{marginTop:'20px'}}>
            <Col xs={{size:1, offset:5}}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="type" onChange={onChange} value={form.type} id="student"/>student
              </Label>
            </FormGroup>
            </Col>
            <Col xs={{size:1}}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="type" onChange={onChange} value={form.type} id="employee"/>employee
              </Label>
            </FormGroup>
            </Col>
          </Row>
          <FormGroup style={{textAlign:'center'}}>
            <Label for="exampleEmail">ID</Label>
            <Input style={inputStyle} type="text" name="userId" id="exampleEmail" placeholder="학번"
            onChange={onChange} value={form.userId} />
          </FormGroup>
          <FormGroup style={{textAlign:'center'}}>
            <Label for="examplePassword">Password</Label>
            <Input style={inputStyle} type="password" name="password" id="examplePassword" placeholder="비밀번호" 
            onChange={onChange} value={form.password} />
          </FormGroup>
          <Button style={{margin:'5px'}}>로그인</Button>
        </Form>
      </span>
    </div>
    </div>
  );
}

export default SignIn;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;