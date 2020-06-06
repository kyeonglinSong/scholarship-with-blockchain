import client from './client';


export const writeNotice = info =>client.post('/school/notices', 
                                                        { 'title':info.info.title, 'content':info.info.content, 'author':info.info.author }, 
                                                        { headers:{'X-AUTH-TOKEN':info.info.token}} );

export const updateNotice = info => client.put(`/school/notices/${info.noticeId}`, 
                                                        { 'title':info.info.title, 'content':info.info.content }, 
                                                        { headers:{'X-AUTH-TOKEN':info.info.token}} );                                                              

export const readNotice = info => client.get(`/school/notices/${info.noticeId}`
                                                                , {headers:{'X-AUTH-TOKEN':info.token}});

export const readNoticeList = token => client.get('/school/notices'
                                                                , {headers:{'X-AUTH-TOKEN':token}});

export const removeNotice = info => client.delete(`/school/notices/${info.id}`
                                                                , {headers:{'X-AUTH-TOKEN':info.token}});
