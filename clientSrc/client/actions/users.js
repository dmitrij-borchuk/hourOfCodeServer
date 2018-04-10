import {
  getWithTeaching,
  getById,
  getAll,
} from '../api/users';

export const GET_USER_WITH_TEACHING_FETCHING = 'GET_USER_WITH_TEACHING_FETCHING';
export const GET_USER_WITH_TEACHING_FETCHING_FINISH = 'GET_USER_WITH_TEACHING_FETCHING_FINISH';
export const GET_USER_WITH_TEACHING_FETCHING_ERROR = 'GET_USER_WITH_TEACHING_FETCHING_ERROR';
export function getUsersWithTeaching() {
  return (dispatch, getState) => {
    const state = getState();
    const { id } = state.auth.currentUser;
    dispatch({
      type: GET_USER_WITH_TEACHING_FETCHING,
    });

    return getWithTeaching(id).then(res => dispatch({
      type: GET_USER_WITH_TEACHING_FETCHING_FINISH,
      payload: res.body,
    })).catch((err) => {
      if (err instanceof Error) {
        throw err;
      } else {
        dispatch({
          type: GET_USER_WITH_TEACHING_FETCHING_ERROR,
        });
        return Promise.reject(err);
      }
    });
  };
}

export const GET_USER_BY_ID_FETCHING = 'GET_USER_BY_ID_FETCHING';
export const GET_USER_BY_ID_FETCHING_FINISH = 'GET_USER_BY_ID_FETCHING_FINISH';
export const GET_USER_BY_ID_FETCHING_ERROR = 'GET_USER_BY_ID_FETCHING_ERROR';
export function getUsersById() {
  return (dispatch, getState) => {
    const state = getState();
    const { id } = state.auth.currentUser;
    dispatch({
      type: GET_USER_BY_ID_FETCHING,
    });

    return getById(id).then(res => dispatch({
      type: GET_USER_BY_ID_FETCHING_FINISH,
      payload: res.body,
    })).catch((err) => {
      if (err instanceof Error) {
        throw err;
      } else {
        dispatch({
          type: GET_USER_BY_ID_FETCHING_ERROR,
        });
        return Promise.reject(err);
      }
    });
  };
}

export const GET_USERS_FETCHING = 'GET_USERS_FETCHING';
export const GET_USERS_FETCHING_FINISH = 'GET_USERS_FETCHING_FINISH';
export const GET_USERS_FETCHING_ERROR = 'GET_USERS_FETCHING_ERROR';
export function getUsers() {
  return async (dispatch) => {
    dispatch({
      type: GET_USERS_FETCHING,
    });

    try {
      const responce = await getAll();
      dispatch({
        type: GET_USERS_FETCHING_FINISH,
        payload: responce.body,
      });
    } catch (error) {
      dispatch({
        type: GET_USERS_FETCHING_ERROR,
        error: true,
        payload: error,
      });
      throw error;
    }
  };
}
