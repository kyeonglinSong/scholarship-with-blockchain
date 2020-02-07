import React from "react";
import './MiddleBar.css';

const MiddleBar = (props)=>{
  return(
    <span className="middle">
      {props.children}
    </span>
  );
}

export default MiddleBar;
