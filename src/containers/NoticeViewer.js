import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readNotice, unloadNotice } from '../modules/notice';
import { setOriginal } from '../modules/write';
import Notice from '../components/NoticeDetail';
import { removeNotice } from '../lib/api/notice';

const NoticeViewer = ({ match, history })=>{
    const noticeId  = match.params;
    console.log(noticeId);
    const dispatch = useDispatch();
    const { notice, error, loading, user } = useSelector(({ notice, loading, auth })=>({
        notice:notice.notice,
        error:notice.error,
        loading:loading['notice/READ_NOTICE'],
        user:auth.auth,
    }));

    useEffect(()=>{
        dispatch(readNotice(noticeId.id));
        return()=>{
            dispatch(unloadNotice());
        };
    }, [dispatch, noticeId]);

    console.log(notice);

    const onRemove = async() => {
        try{
            await removeNotice(noticeId);
            console.log(noticeId)
            history.push('/notices');
        }catch(e){
            console.log(e)
        }
    }

    const onEdit = () =>{
        dispatch(setOriginal(notice));
        console.log("on edit")
        history.push('/notices/write');
    }

    return <Notice notice={notice} loading={loading} error={error} user={user} onRemove={onRemove} onEdit={onEdit}/>;
};

export default withRouter(NoticeViewer);