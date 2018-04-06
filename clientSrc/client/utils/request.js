import superagent from 'superagent';
import { getItem } from '../utils/storage';

import { AUTHORIZATION_HEADER_NAME } from '../constants';

export function send(req) {
  const token = getItem('token');
  return req.set(AUTHORIZATION_HEADER_NAME, `${token}`).send();
}
export const request = superagent;
