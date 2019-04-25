import { authConstant } from '../_constants';
import { userService } from '../_services';

export const authActions = {
    login,
    logout,
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(username));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };

    function request(user) { return { type: authConstant.LOGIN_REQUEST, user } }
    function success(user) { return { type: authConstant.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authConstant.LOGIN_FAILURE, error } }
}

function logout(username) {
    userService.logout(username);
    return { type: authConstant.LOGOUT };
}