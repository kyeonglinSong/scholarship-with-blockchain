import client from './client';

export const readScholarList = ()=> client.get('https://jsonplaceholder.typicode.com/posts');

export const readScholarDetail = id => client.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const registerScholarship =  ( id, title, detail )  => client.post('https://jsonplaceholder.typicode.com/posts/', 
                                                {params:{

                                                }});

export const changeScholarship = ( id, title, detail ) => client.post('https://jsonplaceholder.typicode.com/posts/', 
                                                {params:{

                                                }});

