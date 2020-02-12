import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, addScholar, updateScholar } from '../../modules/school/scholarship';

import FormComponent from '../../components/FormComponent';

const ScholarEditorContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { content, scholar, scholarError, originalScholarId } = useSelector(({ Scholarship })=>({
        content:Scholarship.content,
        scholar:Scholarship.scholarship,
        scholarError:Scholarship.scholarshipError,
        originalScholarId: Scholarship.originalScholarshipId,
    }));

     //change input handler
     const onChange = e =>{
        const { value, name } = e.target;
        dispatch(
            changeField({
                key:name,
                value
            })
        );
    };
    
    const onPublish = () =>{
        console.log(content);
        if(originalScholarId){
            console.log("in update");
            dispatch(updateScholar({originalScholarId, content}));
        }
        dispatch(
            addScholar({
                content,
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
        if(scholar){
            const id = scholar.id;
            history.push(`/scholarships/${id}`);
        }
        if(scholarError){
            console.log(scholarError);
        }
    }, [history, scholar, scholarError])

    return <FormComponent onChange={onChange} content={content} onPublish={onPublish} onCancel={onCancel}/>;
}

export default ScholarEditorContainer;