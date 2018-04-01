import { GET_USER_WITH_TEACHING_FETCHING_FINISH } from '../actions/users';

const defaultState = {
  list: [],
  userWithTeaching: null,
};

export default function authReducers(state = defaultState, action) {
  switch (action.type) {
    case GET_USER_WITH_TEACHING_FETCHING_FINISH:
      return {
        ...state,
        userWithTeaching: action.payload,
      };

    default:
      return state;
  }
}
