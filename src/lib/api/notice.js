import client from './client';

export const writeNotice = ({ userId, id, title, body })=>client.post('https://jsonplaceholder.typicode.com/posts', 
                                                                        { userId, id, title, body });

export const readNotice = id => client.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const readNoticeList = ()=> client.get('https://jsonplaceholder.typicode.com/posts');