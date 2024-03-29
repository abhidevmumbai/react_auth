export const userService = {
    login,
    logout,
    search
};

const requestOptions = {
  credentials: 'include',
  headers: { 'Content-Type': 'application/json' },
  // headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
};

function login(username, credential) {
  let req = {...requestOptions};
  req['method'] = 'POST';
  req['body'] = JSON.stringify({ username, credential });

  return fetch(`http://3.122.7.162:5000/v60/admin/session`, req)
  .then((response) => response.json())
  .then((json) => {
    console.log('Login', json);
    localStorage.setItem('user', JSON.stringify(username));
  }).catch((err) => {
    console.log(err);
  });
}

function logout(username) {
  // Todo: remove user
  localStorage.removeItem('user', JSON.stringify(username));
}

function search(keyword = '') {
  let req = {...requestOptions}, alias = false;
  req['method'] = 'GET';

  return fetch(`http://3.122.7.162:5000/v60/admin/search/user?keyword=${keyword}&alias=${alias}`, req)
    .then((response) => response.json());
}