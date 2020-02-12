import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./content.css"
import styled from 'styled-components';


const SignIn = ({form, onChange, onSubmit})=>{

  const inputStyle = {
    width:'500px',
    margin:'auto',
  }

  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <span className="content">
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input style={inputStyle} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" 
            onChange={onChange} value={form.email} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input style={inputStyle} type="password" name="password" id="examplePassword" placeholder="password placeholder" 
            onChange={onChange} value={form.password} />
          </FormGroup>
          <Button>로그인</Button>
        </Form>
      </span>
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