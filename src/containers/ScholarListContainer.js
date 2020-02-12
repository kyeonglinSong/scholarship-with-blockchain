import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listScholars, prevPage, nextPage } from '../modules/scholarList';
import ScholarList from '../components/ScholarList';
import styled from 'styled-components';

const ScholarListContainer = ()=>{

    const dispatch = useDispatch();
    const { scholars, tempPage, lastPage, total, error, loading } = useSelector(({ scholars, loading })=>({
        scholars:scholars.scholars,
        tempPage:scholars.tempPage,
        lastPage:scholars.lastPage,
        total:scholars.total,
        error:scholars.error,
        loading:loading['scholarList/LIST_SCHOLARS'],
    }));

    const toNextPage = e =>{
        if(e){
            e.preventDefault();
        }
        console.log("on next page");
        dispatch(nextPage());
    }

    const toPrevPage = e =>{
        e.preventDefault();
        dispatch(prevPage());
    }

    useEffect(()=>{
        dispatch(listScholars());
    }, [dispatch]);

    console.log(scholars);

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><ScholarList scholars={scholars} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total}/></div>;
};

export default ScholarListContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;