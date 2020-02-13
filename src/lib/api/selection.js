import client from './client';

export const readStudentList = ()=> client.get('https://koreanjson.com/users');

export const saveStudent = students => client.put('https://koreanjson.com/users', students);
