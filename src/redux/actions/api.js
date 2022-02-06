export const Types = {
  API_REQUEST: '[API REQUEST] fetch'
}

export const ApiRequest = (url, method, body, headers, onSuccess, onError) => ({
  type: Types.API_REQUEST,
  meta: {
    url,
    method,
    body,
    headers,
    onSuccess,
    onError
  }
})
