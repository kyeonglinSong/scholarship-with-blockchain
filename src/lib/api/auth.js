import client from './client';

export const employeelogin = ({ userId, password }) => client.post('http://localhost:8080/school/admin/signin',{userId:userId, password:password});

export const studentlogin = ({ userId, password }) => client.post('http://localhost:8080/school/student/signin',{userId:userId, password:password});

export const register = ({ email, password }) => client.post();

export const check = ({ userId, password }) => client.get('http://localhost:8080/school/admin/signin',{userId:userId,password:password});