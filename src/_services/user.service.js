export const userService = {
    login,
    logout,
};

function login(username, credential) {
    const requestOptions = {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        body: JSON.stringify({ username, credential })
    };

    return fetch(`http://3.122.7.162:5000/v60/admin/session`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // if (user.token) {
            //     // store user details and jwt token in local storage to keep user logged in between page refreshes
            //     localStorage.setItem('user', JSON.stringify(user));
            // }
            console.log('user:  ' + user)

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}