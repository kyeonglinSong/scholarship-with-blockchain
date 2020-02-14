import client from './client';

export const readApplyList = id => client.get(`https://koreanjson.com/todos?userId=${id}`);

export const readApplyDetail = id => client.get(`https://koreanjson.com/posts/${id}`);