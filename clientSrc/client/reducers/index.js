import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import app from './app';
import auth from './auth';
import loader from './loader';

export default combineReducers({
  app,
  auth,
  loader,
  form: formReducer,
});
