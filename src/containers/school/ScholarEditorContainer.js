import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initialize, addScholar, updateScholar } from '../../modules/school/scholarship';
import { readScholar, unloadScholar } from '../../modules/scholarDetail';


import FormComponent from '../../components/school/FormComponent';

const ScholarEditorContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { content, scholar, scholarError, originalScholarId, originalScholar } = useSelector(({ Scholarship, scholarDetail })=>({
        content:Scholarship.content,
        scholar:Scholarship.scholarship,
        scholarError:Scholarship.scholarshipError,
        originalScholarId: Scholarship.originalScholarshipId,
        originalScholar: scholarDetail.scholar,
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
        if(originalScholarId){
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
        dispatch(readScholar(originalScholarId));
        return()=>{
            dispatch(unloadScholar());
        };
    }, [dispatch, originalScholarId]);

    console.log(originalScholar);


    useEffect(()=>{
        if(scholar){
            const id = scholar.id;
            history.push(`/scholarships/${id}`);
        }
        if(scholarError){
            console.log(scholarError);
        }
    }, [history, scholar, scholarError])

    return <FormComponent onChange={onChange} content={content} onPublish={onPublish} onCancel={onCancel} originalScholar={originalScholar}/>;
}

export default ScholarEditorContainer;