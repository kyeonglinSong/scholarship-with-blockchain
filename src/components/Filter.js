import React from 'react';
import {  Button,FormGroup, Label, Input } from 'reactstrap';

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