import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { listScholars, prevPage, nextPage, setToken } from '../../modules/scholarList';
import ScholarshipList from '../../components/school/ScholarshipList';

const ScholarshipsContainer = ()=>{
    const dispatch = useDispatch();
    const { scholars, tempPage, lastPage, total, error, loading, searchWord, possible, token } = useSelector(({ scholars, loading, search })=>({
        scholars:scholars.scholars,
        tempPage:scholars.tempPage,
        lastPage:scholars.lastPage,
        total:scholars.total,
        error:scholars.error,
        loading:loading['scholarList/LIST_SCHOLARS'],
        searchWord:search.searchWord,
        token:scholars.token,
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
        const tempuser=JSON.parse(localStorage.getItem("user"));
        const temptoken=tempuser.data.token;
        const tempauthor=tempuser.data.role;
        console.log(temptoken);
        dispatch(setToken(temptoken, tempauthor));
    }, [dispatch]);

    useEffect(()=>{
        dispatch(listScholars(token));
    }, [dispatch, token]);


    return <ScholarshipList scholars={scholars} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total} searchWord={searchWord}/>;
};

export default ScholarshipsContainer;