import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentDetail from '../../components/school/StudentDetail';

const StudentDetailContainer = ({ match }) => {
    const studentId = match.params.id;
    const scholarId = match.params.scholarId

    const { students, loading } = useSelector(({students, loading })=>({
        students:students.students,
        loading:loading['students/LIST_STUDENTS'],
    }));

    const student= students[studentId-1];

    return <StudentDetail student={student} loading={loading} scholarId={scholarId}/>;
}

export default StudentDetailContainer;