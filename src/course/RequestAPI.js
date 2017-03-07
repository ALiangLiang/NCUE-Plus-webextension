class RequestAPI {
  constructor(api, method, body) {
    this.DOMAIN = 'http://aliangliang.com.tw:3001';
    return fetch(new Request(this.DOMAIN + api, {
        method: method,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }))
      .then((response) =>
        response.json()
        .then((json) => [json, response.ok, response.status], () => [{}, response.ok, response.status]));
  }
};
