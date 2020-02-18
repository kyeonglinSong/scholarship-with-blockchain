import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listNotices, prevPage, nextPage } from '../modules/noticeList';
import NoticeList from '../components/NoticeList';
import styled from 'styled-components';

const NoticeListContainer = ()=>{

    const dispatch = useDispatch();
    const { notices, tempPage, lastPage, total, error, loading, user, searchWord, orderBase } = useSelector(({ notices, loading, auth, search })=>({
        notices:notices.notices,
        tempPage:notices.tempPage,
        lastPage:notices.lastPage,
        total:notices.total,
        error:notices.error,
        loading:loading['noticeList/LIST_NOTICES'],
        user:auth.auth,
        searchWord:search.searchWord,
        orderBase:search.orderBase,
    }));

    var noticeList=notices;

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
        dispatch(listNotices());
    }, [dispatch]);

    const onSubmit = () =>{
        console.log("in submit")
        if(searchWord){
            console.log(searchWord)
          noticeList=notices.filter((notices)=>{
            return notices.title.indexOf(searchWord)>-1;
          })
        }
      }


    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><NoticeList notices={notices} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} total={total} user={user} searchWord={searchWord} onSubmit={onSubmit} orderBase={orderBase}/></div>;
};

export default NoticeListContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;