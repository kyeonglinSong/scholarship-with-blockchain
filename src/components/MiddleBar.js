import React from "react";
import './MiddleBar.css';
import styled from 'styled-components';

const MiddleBar = (props)=>{
  return(
    <span className="middle">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {props.children}
    </span>
  );
}

export default MiddleBar;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;