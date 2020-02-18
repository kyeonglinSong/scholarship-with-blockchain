import client from './client';

export const readScholarList = ()=> client.get('https://koreanjson.com/posts');

export const readScholarDetail = id => client.get(`https://koreanjson.com/posts/${id}`);

export const registerScholarship =  content  => client.post('https://koreanjson.com/posts', content);

export const updateScholarship = ( id, content ) => client.patch(`https://koreanjson.com/posts/${id}`, content);

export const removeScholarship = id => client.delete(`https://koreanjson.com/posts/${id}`);

