const headers: HeadersInit = {
  'Content-type': 'application/json'
};

function _post(url: RequestInfo, data: Object) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers
  }).then(result => result.json());
}

function _put(url: RequestInfo, data: Object) {
  return fetch(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers
  }).then(result => result.json());
}

function _get(url:RequestInfo) {
  return fetch(url).then(result => result.json());
}

export default {
  _post,
  _put,
  _get
}