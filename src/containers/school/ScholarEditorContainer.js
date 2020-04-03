import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeField, initialize, addScholar, updateScholar, setToken } from '../../modules/school/scholarship';
import { readScholar, unloadScholar } from '../../modules/scholarDetail';
import FormComponent from '../../components/school/FormComponent';

const ScholarEditorContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { content, scholar, scholarError, originalScholarId, originalScholar, token } = useSelector(({ Scholarship, scholarDetail })=>({
        content:Scholarship.content,
        scholar:Scholarship.scholarship,
        scholarError:Scholarship.scholarshipError,
        originalScholarId: Scholarship.originalScholarshipId,
        originalScholar: scholarDetail.scholar,
        token:Scholarship.token,
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
        const check = (content.scholarshipName==="" ||content.maturityDateTime===""||content.facevalue===""||content.totalNum==="")
        if(check){
            alert("필수 입력란을 모두 채워주세요");
        }else{
            if(originalScholarId){
                dispatch(updateScholar({originalScholarId, content, token}));
            }
            dispatch(
               addScholar({
                 content, token
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
        dispatch(readScholar(originalScholarId, token));
        return()=>{
            dispatch(unloadScholar());
        };
    }, [dispatch, originalScholarId, token]);


    useEffect(()=>{
        if(scholar){
            const id = scholar.scholarshipId;
            history.push(`/scholarships/${id}`);
        }
        if(scholarError){
            console.log(scholarError);
        }
    }, [history, scholar, scholarError])

    return <FormComponent onChange={onChange} content={content} onPublish={onPublish} onCancel={onCancel} originalScholar={originalScholar}/>;
}

export default ScholarEditorContainer;