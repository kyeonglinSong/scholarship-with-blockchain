import client from './client';

export const readStudentList = ({id, token}) => client.get(`http://localhost:8080/school/applyings/${id}`
                                                                , {headers:{'X-AUTH-TOKEN':token}});

export const saveStudent = ({id, token}) => client.put(`http://localhost:8080/school/applyings/${id}`
                                                                , {headers:{'X-AUTH-TOKEN':token}});

export const closeScholarship = ({scholarId, token}) => client.delete(`http://localhost:8080/school/applyings/${scholarId}`
                                                                , {headers:{'X-AUTH-TOKEN':token}});

export const getScholarState = ({scholarId, token}) => client.get(''); //state를 가져오는거 따로 없고 장학금 불러와서 그 안에서 확인