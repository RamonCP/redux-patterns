import { Types } from '../actions/api'

export const api =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === Types.API_REQUEST) {
      const { url, method, body, headers, onSuccess, onError } = action.meta

      fetch(url, { method, body, headers })
        .then((res) => res.json())
        .then((data) => dispatch({ type: onSuccess, payload: data }))
        .catch((error) => dispatch({ type: onError, payload: error }))
    }

    return next(action)
  }
