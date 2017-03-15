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
        .then((json) => [json, response.ok, response.status], () => [{}, response.ok, response.status]), () => {
          if ($ && $.snackbar)
            $.snackbar({
              content: '發生錯誤：\n1. 網路連線不穩或中斷。\n2. 伺服器已離線QQ，麻煩聯絡管理員修復。'
            });
          if (loadingIcon)
            loadingIcon.stop();
        });
  }
};
