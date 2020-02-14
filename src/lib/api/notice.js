import client from './client';

export const writeNotice = ({ title, body })=>client.post('https://koreanjson.com/posts', 
                                                        { title, body });

export const updateNotice = ({ id, title, body }) => client.patch(`https://koreanjson.com/posts/${id}`, 
                                                                {title, body})                                                                

export const readNotice = id => client.get(`https://koreanjson.com/posts/${id}`);

export const readNoticeList = ()=> client.get('https://koreanjson.com/posts');

export const removeNotice = id => client.delete(`https://koreanjson.com/posts/${id}`);