import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listScholars, prevPage, nextPage } from '../../modules/scholarList';
import ScholarshipList from '../../components/school/ScholarshipList';

const ScholarshipsContainer = ()=>{
    console.log("in scholarlist")
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

    return <ScholarshipList scholars={scholars} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total}/>;
};

export default ScholarshipsContainer;