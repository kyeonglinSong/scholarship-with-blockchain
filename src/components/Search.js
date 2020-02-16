import React from "react";
import Filter from "./Filter";
import {Form, Input} from 'reactstrap';
import styled from 'styled-components';

const Search=({
    setSearchValue,
    searchValue,
    filterByState, //State는 이제 applying, processing, finished 로 스테이트 구분함. 
    setFilterByState
})=>{
    const handleSearchInputChanges=e=>{
        setSearchValue(e.target.value);
    };
    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <br/>
        <Form className="search">
            <Input
            style={{width: '50%',marginLeft:'28%' }}
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

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;

