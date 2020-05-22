import client from './client';

/*

export const writeNotice = ({ title, body, author, token })=>client.post('http://localhost:8080/school/notices', 
                                                        { title, content:body, author }, {headers:{'X-AUTH-TOKEN':token}});

export const updateNotice = ({ id, title, body, token }) => client.patch(`https://koreanjson.com/posts/${id}`, 
                                                                {title, body}, {headers:{'X-AUTH-TOKEN':token}})                                                                

export const readNotice = ({id, token }) => client.get(`https://openapi.naver.com/v1/search/news.json`
, {headers:{'X-AUTH-TOKEN':token, 'X-Naver-Client-Id':'CnSmLQe7w8IxKcX8nttr', 'X-Naver-Client-Secret':'7EM6n2t8wv'}});

export const readNoticeList = token => client.get(`https://openapi.naver.com/v1/search/news.json`
, {headers:{'X-AUTH-TOKEN':token, 'X-Naver-Client-Id':'CnSmLQe7w8IxKcX8nttr', 'X-Naver-Client-Secret':'7EM6n2t8wv'}});

export const removeNotice = ({id, token}) => client.delete(`https://koreanjson.com/posts/${id}`
                                                                , {headers:{'X-AUTH-TOKEN':token}});
*/


export const writeNotice = ({ title, body, author, token })=>client.post('http://localhost:8080/school/notices', 
                                                        { title, content:body, author }, {headers:{'X-AUTH-TOKEN':token}});

export const updateNotice = ({ id, title, body, token }) => client.patch(`https://koreanjson.com/posts/${id}`, 
                                                                {title, body}, {headers:{'X-AUTH-TOKEN':token}})                                                                

export const readNotice = ({id, token }) => client.get(`https://koreanjson.com/posts/${id}`
                                                                , {headers:{'X-AUTH-TOKEN':token}});

export const readNoticeList = token => client.get('/school/notices'
                                                                , {headers:{'X-AUTH-TOKEN':token}});

export const removeNotice = ({id, token}) => client.delete(`https://koreanjson.com/posts/${id}`
                                                                , {headers:{'X-AUTH-TOKEN':token}});
