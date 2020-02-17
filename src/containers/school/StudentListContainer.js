import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { listStudents, prevPage, nextPage, studentStateChange, saveSelection } from '../../modules/school/selection';
import StudentList from '../../components/school/StudentList';
import styled from 'styled-components';

const StudentListContainer = ()=>{

    const dispatch = useDispatch();
    const { students, selected, tempPage, lastPage, total, error, loading, searchWord } = useSelector(({ students, loading, search })=>({
        students:students.students,
        selected:students.selected,
        tempPage:students.tempPage,
        lastPage:students.lastPage,
        total:students.total,
        error:students.error,
        loading:loading['students/LIST_STUDENTS'],
        searchWord:search.searchWord,

    }));

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
        dispatch(listStudents(1));
    }, [dispatch]);

    const onChange = e =>{
        e.preventDefault();
        const { value, name } = e.target;
        var comp = students[name-1].name;
        if(comp.includes("1")){
            students[name-1].name=students[name-1].name+"1";
        }else{
            students[name-1].name=students[name-1].name+"1";
        }
        
        dispatch(studentStateChange(students));
    }

    const onSubmit = e =>{
        e.preventDefault();
        dispatch(saveSelection(students));
    }


    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><StudentList students={students} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
                        nextPage={toNextPage} prevPage={toPrevPage} onChange={onChange} onSubmit={onSubmit} searchWord={searchWord}/></div>;
};

export default StudentListContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;