import React from 'react';
import { useSelector } from 'react-redux';
import StudentDetail from '../../components/school/StudentDetail';

const StudentDetailContainer = ({ match }) => {
    const studentId = match.params.id;
    const scholarId = match.params.scholarId
    var student=null;

    const { students, loading } = useSelector(({students, loading })=>({
        students:students.students,
        loading:loading['students/LIST_STUDENTS'],
    }));

    for(var i=0; i<students.length; i++){
        if(students[i].studentId===studentId){
            student=students[i];
            break;
        }
    }
    console.log(student)
    console.log(scholarId)
    return <StudentDetail student={student} loading={loading} scholarId={scholarId}/>;
}

export default StudentDetailContainer;