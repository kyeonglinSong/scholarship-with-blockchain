import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { readNotice, unloadNotice, setToken } from '../../modules/notice';
import { setOriginal } from '../../modules/write';
import Notice from '../../components/common/NoticeDetail';
import { removeNotice } from '../../lib/api/notice';

const NoticeViewer = ({ match, history })=>{
    const noticeId  = match.params;
    const dispatch = useDispatch();
    const { notice, error, loading, user, token } = useSelector(({ notice, loading, auth })=>({
        notice:notice.notice,
        error:notice.error,
        loading:loading['notice/READ_NOTICE'],
        user:auth.auth,
        token:notice.token,
    }));

    useEffect(()=>{
        const tempuser=JSON.parse(localStorage.getItem("user"));
        const temptoken=tempuser.data.token;
        const tempauthor=tempuser.data.role;
        console.log(temptoken);
        dispatch(setToken(temptoken, tempauthor));
    }, [dispatch]);

    useEffect(()=>{
        dispatch(readNotice(noticeId.id, token));
        return()=>{
            dispatch(unloadNotice());
        };
    }, [dispatch, noticeId, token]);


    const onRemove = async() => {
        try{
            await removeNotice(noticeId);
            history.push('/notices');
        }catch(e){
            console.log(e)
        }
    }

    const onEdit = () =>{
        dispatch(setOriginal(notice));
        history.push('/notices/write');
    }

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><Notice notice={notice} loading={loading} error={error} user={user} onRemove={onRemove} onEdit={onEdit}/></div>;
};

export default withRouter(NoticeViewer);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;