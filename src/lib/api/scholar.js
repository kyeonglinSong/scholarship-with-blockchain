import client from './client';

export const readScholarList = token => client.get('http://localhost:8080/school/scholarships' 
                                                            , {headers:{'X-AUTH-TOKEN':token}});

export const readScholarDetail = ({id, token}) => client.get(`http://localhost:8080/school/scholarships/${id}`
                                                            , {headers:{'X-AUTH-TOKEN':token}});

export const registerScholarship =  ({content, token})  => client.post('http://localhost:8080/school/scholarships', {content}
                                                            , {headers:{'X-AUTH-TOKEN':token}});

export const updateScholarship = ( id, content, token ) => client.patch(`http://localhost:8080/school/scholarships/${id}`, {content}
                                                            , {headers:{'X-AUTH-TOKEN':token}});

export const removeScholarship = ({id, token}) => client.delete(`http://localhost:8080/school/scholarships/${id}`
                                                            , {headers:{'X-AUTH-TOKEN':token}});

