import client from './client';

export const writeNotice = ({ title, body })=>client.post('https://jsonplaceholder.typicode.com/posts', 
                                                        { title, body });

export const updateNotice = ({ id, title, body }) => client.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, 
                                                                {title, body})                                                                

export const readNotice = id => client.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const readNoticeList = ()=> client.get('https://jsonplaceholder.typicode.com/posts');

export const removeNotice = id => client.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);