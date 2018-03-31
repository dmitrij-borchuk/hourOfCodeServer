import * as $ from 'jquery';
import messages from '../scripts/constants/messages';
import { TOKEN_STORAGE_KEY } from '../scripts/constants';
import { set } from '../utils/storage';
import request from '../utils/request';
import { redirect } from '../utils';

// {
//  "realm": "string",
//  "username": "admin",
//  "email": "admin@admin.com",
//  "emailVerified": true,
//  "password": "admin"
// }

// TODO: add loader
export default (function () {
  $('#loginPage-submit').on('click', e => {
    const errorBlock = $('#loginPage-errorMessage');
    const username = $('#loginPage-username');
    const password = $('#loginPage-password');
    errorBlock.hide();
    request(
      'api/Users/login',
      'POST',
      {
        email: username.val(),
        password: password.val(),
      }
    ).then(response => {
      set(TOKEN_STORAGE_KEY, response.id);
      redirect('/');
    }).catch(() => {
      errorBlock.html(messages.UNAUTHORIZED);
      errorBlock.show();
    });

    e.preventDefault();
  });
}());

