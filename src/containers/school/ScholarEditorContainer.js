import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeField } from '../../modules/school/scholarship';
import { addScholar } from '../../modules/scholarList';
import FormComponent from '../../components/school/FormComponent';

const ScholarEditorContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { scholars, content, scholar, scholarError, originalScholarId } = useSelector(({ scholars, Scholarship, scholarDetail })=>({
        scholars:scholars.scholars,
        content:Scholarship.content,
        scholar:Scholarship.scholarship,
        scholarError:Scholarship.scholarshipError,
        originalScholarId: Scholarship.originalScholarId,
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

    console.log(originalScholarId)
    
    const onPublish = () =>{
        const check = (content.scholarName==="" ||content.dueDate===""||content.sum===""||content.num==="")
        if(check){
            alert("필수 입력란을 모두 채워주세요");
        }else{
            if(originalScholarId){
                const info={"scholarId":`${originalScholarId}`, "scholarName":`${content.scholarName}`,
                        "foundation":`${content.foundation}`, "sum":`${content.sum}`,
                        "num":`${content.num}`,"dueDate":`${content.dueDate}`,"semesterStart":`${content.semesterStart}`,
                        "semesterEnd":`${content.semesterEnd}`,"gradeLimit":`${content.gradeLimit}`, "majorLimit":`${content.majorLimit}`}
                if(scholars){
                        for(var i=0; i<scholars.length; i++){
                            if(scholars[i].scholarId===originalScholarId){
                                scholars[i]=info;
                                console.log(scholars[i]);
                                break;
                            }
                        }
                        console.log(scholars)
                        dispatch(addScholar(scholars));
                }
            }else{
                const info={"scholarId":`${parseInt(scholars[scholars.length-1].scholarId)+1}`, "scholarName":`${content.scholarshipName}`,
                        "foundation":"", "sum":`${content.sum}`,"dueDate":`${content.dueDate}`,"semesterStart":`${content.semesterStart}`,
                        "semesterEnd":`${content.semesterEnd}`,"majorLinit":"","gradeLimit":`${content.gradeLimit}`}
                if(scholars){
                    scholars.push(info);
                    dispatch(addScholar(scholars));
                }
            }
            
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
        if(scholar){
            const id = scholar.scholarshipId;
            history.push(`/scholarships/${id}`);
        }
        if(scholarError){
            console.log(scholarError);
        }
    }, [history, scholar, scholarError])

    return <FormComponent onChange={onChange} content={content} onPublish={onPublish} onCancel={onCancel} originalScholar={originalScholarId}/>;
}

export default ScholarEditorContainer;