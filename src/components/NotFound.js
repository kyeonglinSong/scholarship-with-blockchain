import React, { Component } from "react";
import styled from 'styled-components';

const NotFound = ()=>{
  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      Not Found
    </div>
  );
}

export default NotFound;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;