import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeField, changeOrder, initialize, changeSemester, changeCheck } from '../../modules/search';
import SearchBar from '../../components/common/SearchBar';

const SearchContainer = ({ type, onScholarClose }) => {
    const dispatch = useDispatch();
    const { searchWord, possible } = useSelector(({search})=>({
        searchWord:search.searchWord,
        possible:search.possible,
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

    const onPossibleChange = e =>{
        e.preventDefault();
        const { id, name } = e.target;
        dispatch(changeCheck(id));
    }

    useEffect(()=>{
        return() => {
            dispatch(initialize());
        };
    }, [dispatch]);

    return  <div><meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <SearchBar possible={possible} onPossibleChange={onPossibleChange} onChange={onChange} onDropChange={onDropChange} 
                        type={type} onSemesterChange={onSemesterChange} onScholarClose={onScholarClose}/></div>
}

export default SearchContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;

