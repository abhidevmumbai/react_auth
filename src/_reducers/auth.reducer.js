import { authConstant } from '../_constants';

// let user = JSON.parse(localStorage.getItem('user'));
// const initialState = user ? { loggingIn: true, user } : {};

const initialState = {
  loggingIn: false,
  user: '',
  error: ''
}

export function auth(state = initialState, action) {
  switch (action.type) {
    case authConstant.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user
      };
    case authConstant.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.user
      };
    case authConstant.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error
      };
    case authConstant.LOGOUT:
      return {};
    default:
      return state
  }
}