import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { prevPage, nextPage, setPage } from '../../modules/scholarList';
import ScholarshipList from '../../components/school/ScholarshipList';

const ScholarshipsContainer = ()=>{
    const dispatch = useDispatch();
    const { scholars, tempPage, lastPage, total, error, loading, searchWord, possible } = useSelector(({ scholars, loading, search })=>({
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
        dispatch(setPage());
    }, [dispatch]);

    return <ScholarshipList scholars={scholars} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total} searchWord={searchWord}/>;
};

export default ScholarshipsContainer;