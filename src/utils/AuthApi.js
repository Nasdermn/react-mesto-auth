class AuthApi {
  constructor(options) {
    this.url = options.url;
    this.headers = options.headers;
  }

  handleResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject("Ошибка при обращении к серверу в компоненте AuthApi");
  }

  registerUser(email, password) {
    return fetch(`${this.url}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then(this.handleResponse);
  }

  loginUser(email, password) {
    return fetch(`${this.url}/signin`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ email, password }),
    }).then(this.handleResponse);
  }

  tokenCheck(jwt) {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(this.handleResponse);
  }
}

const options = {
  url: "https://auth.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
};

const authApi = new AuthApi(options);
export default authApi;
