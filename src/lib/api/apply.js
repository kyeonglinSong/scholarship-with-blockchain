import client from './client';

export const readApplyList = id => client.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);

export const readApplyDetail = id => client.get(`https://jsonplaceholder.typicode.com/posts/${id}`);