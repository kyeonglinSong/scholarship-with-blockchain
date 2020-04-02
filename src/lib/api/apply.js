import client from './client';

export const readApplyList = ({id, token}) => client.get(`http://localhost:8080/school/applyings/${id}`
                                                                    , {headers:{'X-AUTH-TOKEN':token}});

export const readApplyDetail = id => client.get(`https://koreanjson.com/posts/${id}`); //지원 상세