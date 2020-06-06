import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { changeField, initialize, setInfo } from '../../modules/write';
import EditorComponent from '../../components/school/EditorComponent';
import { addNotice, setOriginal } from '../../modules/noticeList';

const EditorContainer = ({ history }) => {
    const date=new Date();

    const dispatch = useDispatch();
    const { notices, title, body, originalNoticeId, author } = useSelector(({ notices, write, auth })=>({
        notices:notices.notices,
        title: write.title,
        body:write.body,
        originalNoticeId: notices.originalNoticeId,
        author:write.author,
    }));

    for(var i=0; i<notices.length; i++){
        if(notices[i].id===originalNoticeId){
            var notice=notices[i];
            break;
        }
    }

    const onChangeField = useCallback(payload => dispatch(changeField(payload)),[
        dispatch,
    ]);

    useEffect(()=>{
        if(originalNoticeId)
            dispatch(setInfo(notice));
    }, [dispatch, originalNoticeId, notice])
    
    const onPublish = () =>{
        if(originalNoticeId){
            const info={'title':title, 'content':body, 'id':originalNoticeId, 'author':author, 'modifiedDate':`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`};
            for(var i=0; i<notices.length; i++){
                if(notices[i].id===originalNoticeId){
                    notices[i]=info;
                    break;
                }
            }
            dispatch(addNotice(notices));
            history.push(`/notices/${originalNoticeId}`);
        }
        const info={'id':`${parseInt(notices[notices.length-1].id)+1}`,'title':title, 'content':body, 'author':author, 'modifiedDate':`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`};
        if(notices){
            notices.push(info);
            dispatch(
                addNotice(notices)
            );
            history.push(`/notices/${notices[notices.length-1].id}`);
        }
    }

    const onCancel = () =>{
        dispatch(initialize());
        dispatch(setOriginal(null));
        if(originalNoticeId){
            history.push(`/notices/${originalNoticeId}`);
        }else{
            history.push('/notices');
        }
    }


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