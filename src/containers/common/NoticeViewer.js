import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { setOriginal } from "../../modules/noticeList";
import Notice from '../../components/common/NoticeDetail';

const NoticeViewer = ({ match, history })=>{
    const noticeId  = match.params.id;
    const dispatch = useDispatch();
    var notice;

    const { notices, error, loading, user } = useSelector(({ notices, notice, loading, auth })=>({
        notices:notices.notices,
        error:notice.error,
        loading:loading['notice/READ_NOTICE'],
        author:notice.author,
        user:auth.auth.type,
    }));

    for(var i=0; i<notices.length; i++){
        if(notices[i].id===noticeId){
            notice=notices[i];
            break;
        }
    }


    const onRemove = () => {
        for(var i=0; i<notices.length; i++){
            if(notices[i].id===noticeId){
                notices.splice(i,1);
                break;
            }
        }
        history.push('/notices');

    }

    const onEdit = () =>{
        dispatch(setOriginal(noticeId))
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