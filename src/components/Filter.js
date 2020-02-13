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
          <option value="TV">TV</option>
          <option value="OVA">OVA</option>
          <option value="nesciunt quas odio">nesciunt quas odio</option>
        </select>
          </div>
          <Button onClick={clearFilter}>초기화</Button>
        </div>
    );
};
export default Filter;