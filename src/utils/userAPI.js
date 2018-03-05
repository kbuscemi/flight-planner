import tokenService from './tokenService';
const BASE_URL = '/api/users/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // if not res.ok, chances are duplciate email
    throw new Error('Email already taken!');
  })
  .then((token) => token.token);
}

function login(creds) {
  return fetch(BASE_URL + 'login' , {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    //valid login if we have a status of res.ok
    if (res.ok) return res.json();
    throw new Error('Bad credentials');
  })
  .then(({token}) => token);
}

function getFlights() {
  return fetch(BASE_URL + 'flights' , {
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    })
  })
  .then(res => {
    //valid login if we have a status of res.ok
    if (res.ok) return res.json();
    throw new Error('Bad credentials');
  })
  .then((flights) => flights);
}


export default {
  signup,
  login,
  getFlights
};