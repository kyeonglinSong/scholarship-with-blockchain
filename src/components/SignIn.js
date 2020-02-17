import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./content.css"
import styled from 'styled-components';
import LOGO from '../images/logo.PNG'

const SignIn = ({form, onChange, onSubmit})=>{

  const inputStyle = {
    width:'37.5%',
    marginLeft:'auto',
    marginRight: 'auto'
  }

  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div style={{overflowX: 'hidden'}}>
      <br/><br/><br/>
      <div style={{textAlign: 'center'}}><img className="center" src={LOGO} style={{width: '150px'}}/><br/></div>
      <span className="content">
        <Form onSubmit={onSubmit} style={{marginLeft:'auto', marginRight:'auto'}}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input style={inputStyle} type="email" name="email" id="exampleEmail" placeholder="학번"
            onChange={onChange} value={form.email} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input style={inputStyle} type="password" name="password" id="examplePassword" placeholder="비밀번호" 
            onChange={onChange} value={form.password} />
          </FormGroup>
          <Button>로그인</Button>
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