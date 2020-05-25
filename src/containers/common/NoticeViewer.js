import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { readNotice, unloadNotice, setToken, setId, setInfo } from '../../modules/notice';
import { setOriginal, setInfo_update } from '../../modules/write';
import Notice from '../../components/common/NoticeDetail';
import { removeNotice } from '../../lib/api/notice';

const NoticeViewer = ({ match, history })=>{
    const noticeId  = match.params.id;
    const dispatch = useDispatch();

    const { id, notice, error, loading, author, token, info, info_update } = useSelector(({ notice, loading, write })=>({
        id:notice.id,
        notice:notice.notice,
        error:notice.error,
        loading:loading['notice/READ_NOTICE'],
        author:notice.author,
        token:notice.token,
        info:notice.info,
        info_update:write.info,
    }));


    useEffect(()=>{
        const tempuser=JSON.parse(localStorage.getItem("user"));
        const temptoken=tempuser.data.token;
        const tempauthor=tempuser.data.role;
        const info={'token':temptoken, 'author':tempauthor, 'noticeId':noticeId};
        console.log(info);
        dispatch(setInfo(info));
    }, [dispatch, noticeId]);
/*
    useEffect(()=>{
        dispatch(setId(noticeId));
    },[dispatch, noticeId]);
*/
    useEffect(()=>{
        if(info.token!=null){
            dispatch(readNotice(info));
            return()=>{
                dispatch(unloadNotice());
            };
        }
        
    }, [dispatch, info]);


    const onRemove = async() => {
        try{
            console.log(noticeId);
            console.log(info.token);
            const temp={'id':noticeId, 'token':info.token}
            await removeNotice(temp);
            history.push('/notices');
        }catch(e){
            console.log(e)
        }
    }

    const onEdit = () =>{
        const temp={'originalNotice':notice, 'author':info.author,'token':info.token }
        console.log(temp)
        dispatch(setInfo_update(temp));
        console.log(info_update);
        history.push('/notices/write');
    }

    console.log(notice);

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><Notice notice={notice} loading={loading} error={error} user={info.author} onRemove={onRemove} onEdit={onEdit}/></div>;
};

export default withRouter(NoticeViewer);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;