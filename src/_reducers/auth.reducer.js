import { authConstant } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggingIn: true, user } : {};

export function auth(state = initialState, action) {
  switch (action.type) {
    case authConstant.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case authConstant.LOGIN_SUCCESS:
      return {
        loggingIn: false,
        user: action.user
      };
    case authConstant.LOGIN_FAILURE:
      return {};
    case authConstant.LOGOUT:
      return {};
    default:
      return state
  }
}