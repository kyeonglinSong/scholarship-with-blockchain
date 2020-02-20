import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./content.css"


const SignIn = ({form, onChange, onSubmit})=>{

  const inputStyle = {
    width:'500px',
    margin:'auto',
  }

  return(
    <div>
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