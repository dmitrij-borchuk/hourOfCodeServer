import { request, send } from '../utils/request';

export const get = () => send(request.get('/api/users'));
export const getById = id => send(request.get(`/api/users/${id}`));
export const getWithTeaching = id => send(request.get(`/api/users/${id}?filter={"include": ["teaching"]}`));
