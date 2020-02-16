import React from 'react';
import {  Button,FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const Filter=({
  filterByState,
  setFilterByState
})=>{

    const clearFilter=e=>{
      setFilterByState("");
    };

    const handleFilterByStateChange= e => {
      setFilterByState(e.target.value);
    };

    return(
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <div>
            <label>상태:&nbsp;&nbsp;</label>
            <select defaultValue={filterByState} onChange={handleFilterByStateChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
          </div>
          <Button onClick={clearFilter}>초기화</Button>
        </div>
    );
};
export default Filter;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;
