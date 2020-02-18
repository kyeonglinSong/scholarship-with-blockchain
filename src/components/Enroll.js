import React, { Component } from "react";
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import MiddleBar from "./common/MiddleBar";
import "./content2.css"
import styled from 'styled-components';

const Enroll = ()=>{
  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <MiddleBar>장학금 등록</MiddleBar>
    <span className="content2">
    <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            <Input addon type="checkbox" aria-label="Checkbox for following text input" />
          </InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon addonType="append">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Dolla dolla billz yo!" />
        <InputGroupAddon addonType="append">
          <InputGroupText>$</InputGroupText>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
      <br />
      <button>등록</button>
      </span>
    </div>
  );
};


export default Enroll;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;