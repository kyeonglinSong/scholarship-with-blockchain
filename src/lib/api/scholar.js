import client from './client';

export const readScholarList = ()=> client.get('https://jsonplaceholder.typicode.com/posts');

export const readScholarDetail = id => client.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const registerScholarship =  content  => client.post('https://jsonplaceholder.typicode.com/posts', content);

export const updateScholarship = ( id, content ) => client.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, content);

export const removeScholarship = id => client.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

