import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { prevPage, nextPage, setPage } from '../../modules/applyList';
import ApplyList from '../../components/student/ApplyList';

const ApplyListContainer = ()=>{

    const dispatch = useDispatch();
    const { applies, tempPage, lastPage, total, error, loading } = useSelector(({ applies, loading })=>({
        applies:applies.applies,
        tempPage:applies.tempPage,
        lastPage:applies.lastPage,
        total:applies.total,
        error:applies.error,
        loading:loading['applyList/LIST_APPLIES'],
    }));

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
        dispatch(setPage());
    }, [dispatch]);

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><ApplyList applies={applies} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total}/></div>;
};

export default ApplyListContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;