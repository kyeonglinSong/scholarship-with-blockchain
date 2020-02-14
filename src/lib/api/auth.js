import client from './client';

export const login = ({ email, password }) => client.get(`https://koreanjson.com/users/${password}`);

export const register = ({ email, password }) => client.post();

export const check = ({ password }) => client.get(`https://koreanjson.com/users/${password}`);