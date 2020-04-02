import client from './client';

export const writeNotice = ({ title, body, author, token })=>client.post('http://localhost:8080/school/notices', 
                                                        { title, content:body, author }, {headers:{'X-AUTH-TOKEN':token}});

export const updateNotice = ({ id, title, body, token }) => client.patch(`https://koreanjson.com/posts/${id}`, 
                                                                {title, body}, {headers:{'X-AUTH-TOKEN':token}})                                                                

export const readNotice = ({id, token }) => client.get(`https://koreanjson.com/posts/${id}`
                                                                , {headers:{'X-AUTH-TOKEN':token}});

export const readNoticeList = token => client.get('http://localhost:8080/school/notices'
                                                                , {headers:{'X-AUTH-TOKEN':token}});

export const removeNotice = ({id, token}) => client.delete(`https://koreanjson.com/posts/${id}`
                                                                , {headers:{'X-AUTH-TOKEN':token}});