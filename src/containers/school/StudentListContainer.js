import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listStudents, prevPage, nextPage, studentStateChange, saveSelection, getScholarState, closeScholar, setScholarId, setToken } from '../../modules/school/selection';
import StudentList from '../../components/school/StudentList';
import styled from 'styled-components';

const StudentListContainer = ({ match })=>{

    const scholarId = match.params.id;

    const dispatch = useDispatch();
    const { students, selected, tempPage, lastPage, total, error, loading, searchWord, scholarState, token } = useSelector(({ students, loading, search })=>({
        students:students.students,
        selected:students.selected,
        tempPage:students.tempPage,
        lastPage:students.lastPage,
        total:students.total,
        error:students.error,
        loading:loading['students/LIST_STUDENTS'],
        searchWord:search.searchWord,
        scholarState:students.scholarState,
        token:students.token,
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
        const tempuser=JSON.parse(localStorage.getItem("user"));
        const temptoken=tempuser.data.token;
        const tempauthor=tempuser.data.role;
        console.log(temptoken);
        dispatch(setToken(temptoken, tempauthor));
    }, [dispatch]);

    useEffect(()=>{
        dispatch(setScholarId(scholarId));
        dispatch(listStudents(token));
        dispatch(getScholarState(token));
    }, [dispatch, scholarId, token]);

    const onChange = e =>{
        e.preventDefault();
        const { value, name } = e.target;
        var comp = students[name-1].name;
        /*
        if(comp.includes("1")){
            students[name-1].name=students[name-1].name+"1";
        }else{
            students[name-1].name=students[name-1].name+"1";
        }*/
        
        dispatch(studentStateChange(students, token));
    }

    const onScholarClose = e => {
        e.preventDefault();
        dispatch(closeScholar(scholarId, token));
    }
    

    const onSelect = e =>{
        e.preventDefault();
        const { value, name } = e.target;
        students[name-1].name=students[name-1].name+"1";
        //안에 선발인지 탈랄인지 확인하는거 추가할거밍
        dispatch(saveSelection(students[name-1], token));
    }

    const onSubmit = e =>{
        e.preventDefault();
        dispatch(saveSelection(students, token));
    }


    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <StudentList students={students} tempPage={tempPage} lastPage={lastPage} loading={loading} error={error} 
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