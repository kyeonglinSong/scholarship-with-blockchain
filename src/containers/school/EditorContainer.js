import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeField, initialize, writeNotice, updateNotice, setToken } from '../../modules/write';
import EditorComponent from '../../components/school/EditorComponent';

const EditorContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { title, body, notice, noticeError, originalNoticeId, author, user, token } = useSelector(({ write, auth })=>({
        title: write.title,
        body:write.body,
        notice:write.notice,
        noticeError:write.noticeError,
        originalNoticeId: write.originalNoticeId,
        author:write.author,
        token:write.token,
        user:auth.auth,
    }));

    const onChangeField = useCallback(payload => dispatch(changeField(payload)),[
        dispatch,
    ]);
    
    const onPublish = () =>{

        if(originalNoticeId){
            dispatch(updateNotice({originalNoticeId, title, body}));
        }
        dispatch(
            writeNotice({
                title,body,author,token
            }),
        );
    }

    const onCancel = () =>{
        if(originalNoticeId){
            history.push(`/notices/${originalNoticeId}`);
        }else{
            history.push('/notices');
        }
    }

    useEffect(()=>{
        const tempuser=JSON.parse(localStorage.getItem("user"));
        const temptoken=tempuser.data.token;
        const tempauthor=tempuser.data.role;
        console.log(temptoken);
        dispatch(setToken(temptoken, tempauthor));
    }, [dispatch]);

    
    useEffect(()=>{
        return() => {
            dispatch(initialize());
        };
    }, [dispatch, token]);
    

    useEffect(()=>{
        if(notice){
            const id = notice.id;
            history.push(`/notices/${id}`);
        }
        if(noticeError){
            console.log(noticeError);
        }
    }, [history, notice, noticeError])

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <EditorComponent onChangeField={onChangeField} title={title} body={body} onPublish={onPublish} onCancel={onCancel}/>
            </div>;
}

export default EditorContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;