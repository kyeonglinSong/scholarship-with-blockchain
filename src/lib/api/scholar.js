import client from './client';

export const readScholarList = ()=> client.get('https://jsonplaceholder.typicode.com/posts');

export const readScholarDetail = id => client.get(`https://jsonplaceholder.typicode.com/posts/${id}`);