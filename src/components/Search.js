import React from "react";
import Filter from "./Filter";
import {Form, Input} from 'reactstrap';
const Search=({
    setSearchValue,
    searchValue,
    filterByState,
    setFilterByState
})=>{
    const handleSearchInputChanges=e=>{
        setSearchValue(e.target.value);
    };
    return(
        <div>
            <br/>
        <Form className="search">
            <Input
            style={{width: '300px', position: 'relative', left: '635px'}}
            placeholder="장학금 이름"
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
            />
            <br/>
            <Filter
            filterByState={filterByState}
            setFilterByState={setFilterByState}
            />
        </Form>
        </div>
    );
};
export default Search;