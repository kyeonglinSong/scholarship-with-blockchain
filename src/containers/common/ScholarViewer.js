import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { setScholar } from '../../modules/scholarDetail';
import { setOriginal } from '../../modules/school/scholarship';
import { addScholar } from '../../modules/scholarList';
import ScholarDetail from '../../components/common/ScholarDetail';
import { addApply } from '../../modules/applyList';
import { addStudent } from '../../modules/school/selection';

const ScholarViewer = ({ match, history })=>{
    const scholarId  = match.params;
    var tmpScholar=[];
    const dispatch = useDispatch();
    const { scholarList, scholar, error, loading, user, applies, students } = useSelector(({ scholars, scholarDetail, loading, auth, applies, students })=>({
        scholarList:scholars.scholars,
        scholar:scholarDetail.scholar,
        error:scholarDetail.error,
        loading:loading['scholar/READ_SCHOLAR'],
        user:auth.auth,
        applies:applies.applies,
        students:students.students
    }));

    for(var i=0; i<scholarList.length; i++){
        if(scholarList[i].scholarId===scholarId.id){
            tmpScholar.push(scholarList[i])
            break;
        }
    }

    useEffect(()=>{
        const tempScholar=scholarList[scholarId.id-1];
        dispatch(setScholar(tempScholar));
    }, [dispatch, scholarId, scholarList]);


    const onRemove = () => {
        console.log("in remove")
        for(var i=0; i<scholarList.length; i++){
            if(scholarList[i].scholarId===scholarId.id){
                console.log(scholarList[i])
                scholarList.splice(i,1);
                break;
            }
        }
        dispatch(addScholar(scholarList));
        history.push('/scholarships');

    }

    const onEdit = () =>{
        dispatch(setOriginal(scholar));
        history.push('/scholarships/new');
    }

    const onSubmit = ()=>{
        const newApply={"applyingId":`${applies[applies.length-1].applyingId+1}`,
                        "scholarName":`${tmpScholar[0].scholarName}`, "scholarId":`${scholarId}`,
                        "state":"applyDone", "studentName":"", "studentId":""}
        const newStudent={"scholarId":`${scholarId.id}`,"idx":`${tmpScholar[tmpScholar.length-1].idx+1}`,
                        "name":"new","studentId":"new","schoolName":"이화여자대학교",
                        "completeSemester":"new", "priorGrade":"new","tution":"new","college":"new",
                        "studentMajor":"new"};
        students.push(newStudent);
        applies.push(newApply);
        dispatch(addApply(applies));
        dispatch(addStudent(students))
    }

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ScholarDetail scholar={scholar} loading={loading} error={error} user={user} onRemove={onRemove} onEdit={onEdit} onSubmit={onSubmit}/></div>;
};

export default withRouter(ScholarViewer);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;