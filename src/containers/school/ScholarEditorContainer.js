import React, { useEffect } from 'react';
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
        const check = (content.scholarName==="" || content.startDate===""||content.endDate===""||content.sum===""||content.numberofPeople==="")
        if(check){
            alert("필수 입력란을 모두 채워주셈");
        }else{
            if(originalScholarId){
                dispatch(updateScholar({originalScholarId, content}));
            }
            dispatch(
               addScholar({
                 content,
               }),
            ); 
            history.push('/selections');
        }
    }

    const onCancel = () =>{
        if(originalScholarId){
            history.push(`/scholarships/${originalScholarId}`);
        }else{
            history.push('/scholarships');
        }
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