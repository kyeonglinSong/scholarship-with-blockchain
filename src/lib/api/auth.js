import client from './client';

export const login = ({ email, password }) => client.get(`https://jsonplaceholder.typicode.com/users/${password}`);

export const register = ({ email, password }) => client.post();

export const check = ({ password }) => client.get(`https://jsonplaceholder.typicode.com/users/${password}`);