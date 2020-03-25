import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { listScholars, prevPage, nextPage } from '../../modules/scholarList';
import ScholarList from '../../components/student/ScholarList';

const ScholarListContainer = ()=>{

    const dispatch = useDispatch();
    const { scholars, tempPage, lastPage, total, error, loading, searchWord, possible } = useSelector(({ scholars, loading, search })=>({
        scholars:scholars.scholars,
        tempPage:scholars.tempPage,
        lastPage:scholars.lastPage,
        total:scholars.total,
        error:scholars.error,
        loading:loading['scholarList/LIST_SCHOLARS'],
        searchWord:search.searchWord,
        possible:search.possible,
    }));

    console.log(possible);

    const toNextPage = e =>{
        if(e){
            e.preventDefault();
        }
        dispatch(nextPage());
    }

    const toPrevPage = e =>{
        e.preventDefault();
        dispatch(prevPage());
    }

    useEffect(()=>{
        dispatch(listScholars());
    }, [dispatch]);


    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <ScholarList scholars={scholars} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total} searchWord={searchWord} possible={possible}/></div>;
};

export default ScholarListContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;