import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { listNotices, prevPage, nextPage, setToken } from '../../modules/noticeList';
import NoticeList from '../../components/common/NoticeList';

const NoticeListContainer = ()=>{

    const dispatch = useDispatch();
    const { notices, tempPage, lastPage, total, error, loading, user, searchWord, orderBase, token, author } = useSelector(({ notices, loading, auth, search })=>({
        notices:notices.notices,
        tempPage:notices.tempPage,
        lastPage:notices.lastPage,
        total:notices.total,
        error:notices.error,
        loading:loading['noticeList/LIST_NOTICES'],
        user:auth.auth,
        searchWord:search.searchWord,
        orderBase:search.orderBase,
        token:notices.token,
        author:notices.author,
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
        console.log(token);
        dispatch(listNotices(token));
    }, [dispatch, token])



    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><NoticeList notices={notices} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total} user={user} searchWord={searchWord} orderBase={orderBase}/></div>;
};

export default NoticeListContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;