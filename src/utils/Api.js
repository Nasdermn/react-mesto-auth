class Api {
  constructor(options) {
    this.url = options.url;
    this.headers = options.headers;
  }

  handleResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject("Ошибка при обращении к серверу в компоненте Api");
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      method: "GET",
      headers: this.headers,
    }).then(this.handleResponse);
  }

  getUserProfile() {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then(this.handleResponse);
  }

  patchProfile(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this.handleResponse);
  }

  patchAvatar(avatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(this.handleResponse);
  }

  postCard(name, link) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then(this.handleResponse);
  }

  likeCard(id) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then(this.handleResponse);
  }

  dislikeCard(id) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this.handleResponse);
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: isLiked ? "PUT" : "DELETE",
      headers: this.headers,
    }).then(this.handleResponse);
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then(this.handleResponse);
  }
}

const options = {
  url: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
    authorization: "0fa98e94-ea07-4d0e-8a4c-48f3981dda97",
    "Content-Type": "application/json",
  },
};

const api = new Api(options);
export default api;
