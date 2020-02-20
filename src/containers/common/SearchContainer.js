import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeField, changeOrder, initialize, changeSemester } from '../../modules/search';
import SearchBar from '../../components/common/SearchBar';

const SearchContainer = ({ type }) => {
    const dispatch = useDispatch();
    const { searchWord } = useSelector(({search})=>({
        searchWord:search.searchWord,
    }));

    const onChange = e =>{
        e.preventDefault();
        const { value, name } = e.target;
        dispatch(changeField(value));
    }

    const onDropChange = e => {
        e.preventDefault();
        const { value, name } = e.target;
        dispatch(changeOrder(name));
    }

    const onSemesterChange = e => {
        e.preventDefault();
        const { value, name } = e.target;
        dispatch(changeSemester(value));
    }

    useEffect(()=>{
        return() => {
            dispatch(initialize());
        };
    }, [dispatch]);

    return  <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><SearchBar onChange={onChange} onDropChange={onDropChange} type={type} onSemesterChange={onSemesterChange}/></div>
}

export default SearchContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;

