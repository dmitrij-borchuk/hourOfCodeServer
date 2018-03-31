import * as $ from 'jquery';
import { TOKEN_STORAGE_KEY } from '../scripts/constants';
import { get } from '../utils/storage';

export default (url, method, data) => $.ajax({
  url,
  method,
  data,
  headers: {
    Authorization: get(TOKEN_STORAGE_KEY),
  },
});
