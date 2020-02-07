import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readNotice, unloadNotice } from '../modules/notice';
import Notice from '../components/NoticeDetail';

const NoticeViewer = ({ match })=>{
    const noticeId  = match.params;
    console.log(noticeId);
    const dispatch = useDispatch();
    const { notice, error, loading } = useSelector(({ notice, loading })=>({
        notice:notice.notice,
        error:notice.error,
        loading:loading['notice/READ_NOTICE'],
    }));

    useEffect(()=>{
        dispatch(readNotice(noticeId.id));
        return()=>{
            dispatch(unloadNotice());
        };
    }, [dispatch, noticeId]);

    console.log(notice);

    return <Notice notice={notice} loading={loading} error={error} />;
};

export default withRouter(NoticeViewer);