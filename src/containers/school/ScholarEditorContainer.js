import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, writeNotice, updateNotice } from '../../modules/write';

import EditorComponent from '../../components/EditorComponent';
import styled from 'styled-components';

const EditorContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, notice, noticeError, originalNoticeId } = useSelector(({ write })=>({
        title: write.title,
        body:write.body,
        notice:write.notice,
        noticeError:write.noticeError,
        originalNoticeId: write.originalNoticeId,
    }));
    console.log(originalNoticeId);
    const onChangeField = useCallback(payload => dispatch(changeField(payload)),[
        dispatch,
    ]);
    
    const onPublish = () =>{
        if(originalNoticeId){
            console.log("in update");
            dispatch(updateNotice({originalNoticeId, title, body}));
        }
        dispatch(
            writeNotice({
                title,body,
            }),
        );
    }

    const onCancel = () =>{
        history.goBack();
    }

    useEffect(()=>{
        return() => {
            dispatch(initialize());
        };
    }, [dispatch]);

    useEffect(()=>{
        if(notice){
            const id = notice.id;
            console.log(notice);
            history.push(`/notices/${id}`);
        }
        if(noticeError){
            console.log(noticeError);
        }
    }, [history, notice, noticeError])

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><EditorComponent onChangeField={onChangeField} title={title} body={body} onPublish={onPublish} onCancel={onCancel}/></div>;
}

export default EditorContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;