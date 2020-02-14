import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize } from '../modules/search';
import SearchBar from '../components/SearchBar';

const SearchContainer = () => {
    console.log("in search container")
    const dispatch = useDispatch();
    const { searchWord } = useSelector(({search})=>({
        searchWord:search.searchWord,
    }));

    const onChange = e =>{
        e.preventDefault();
        const { value, name } = e.target;
        console.log(value);
        dispatch(changeField(value));
    }

    useEffect(()=>{
        return() => {
            dispatch(initialize());
        };
    }, [dispatch]);

    return <SearchBar onChange={onChange}/>
}

export default SearchContainer;