import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { prevPage, nextPage, studentStateChange, setScholarId, setPage, saveSelection } from '../../modules/school/selection';
import StudentList from '../../components/school/StudentList';
import styled from 'styled-components';

const StudentListContainer = ({ match })=>{

    const scholarId = match.params.id;

    const dispatch = useDispatch();
    const { students, selected, tempPage, lastPage, total, error, loading, searchWord, scholarState } = useSelector(({ students, loading, search })=>({
        students:students.students,
        selected:students.selected,
        tempPage:students.tempPage,
        lastPage:students.lastPage,
        total:students.total,
        error:students.error,
        loading:loading['students/LIST_STUDENTS'],
        searchWord:search.searchWord,
        scholarState:students.scholarState,
    }));

    console.log(scholarId)
    var tmpStudents=[];
    for(var i=0; i<students.length; i++){
        if(students[i].scholarId===scholarId){
            tmpStudents.push(students[i]);
        }
    }

    const toNextPage = e =>{
        if(e){
            e.preventDefault();
        }
        dispatch(nextPage());
    }

    const toPrevPage = e =>{
        e.preventDefault();
        dispatch(prevPage());
    }

    useEffect(()=>{
        dispatch(setPage());
    }, [dispatch]);

    useEffect(()=>{
        dispatch(setScholarId(scholarId));
    }, [dispatch, scholarId]);

    const onChange = e =>{
        e.preventDefault();
        const { value, name } = e.target;
        if(students[name-1].state==='선발'){
            students[name-1].state = '미선발';
        }else{
            students[name-1].state = '선발';
        }
        
        dispatch(saveSelection(students));
    }

    const onScholarClose = e => {
        e.preventDefault();
        //dispatch(closeScholar(scholarId, token));
    }
    

    const onSelect = e =>{
        e.preventDefault();
        const { value, name } = e.target;
        console.log(name);
        for(var i=0; i<students.length; i++){
            if(students[i].studentId == name){
                if(students[i].state==='선발'){
                    students[i].state = '미선발';
                }else{
                    students[i].state = '선발';
                }
                break;
            }
        }
        dispatch(saveSelection(students));
    }

    const onSubmit = e =>{
        e.preventDefault();
        //dispatch(saveSelection(students, token));
    }


    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <StudentList students={tmpStudents} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} onChange={onChange} onSubmit={onSubmit} 
                        searchWord={searchWord} scholarId={scholarId} onSelect={onSelect} 
                        onScholarClose={onScholarClose} scholarState={scholarState}/>
                        </div>;
};

export default StudentListContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;