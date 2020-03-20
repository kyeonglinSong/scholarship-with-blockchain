import client from './client';

export const writeNotice = ({ title, body, author, token })=>client.post('http://localhost:8080/school/notices', 
                                                        { title, content:body, author }, {headers:{'X-AUTH-TOKEN':token}});

export const updateNotice = ({ id, title, body }) => client.patch(`https://koreanjson.com/posts/${id}`, 
                                                                {title, body})                                                                

export const readNotice = id => client.get(`https://koreanjson.com/posts/${id}`);

export const readNoticeList = ()=> client.get('https://koreanjson.com/posts');

export const removeNotice = id => client.delete(`https://koreanjson.com/posts/${id}`);