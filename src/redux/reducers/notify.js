import { NotifyTypes } from '../actions/notify'

const initialState = {
  show: false,
  message: '',
  type: ''
}

export const notifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case NotifyTypes.SHOW_NOTIFY: {
      return {
        show: true,
        message: action.payload.message,
        type: action.payload.type
      }
    }

    case NotifyTypes.HIDE_NOTIFY: {
      return initialState
    }

    default: {
      return state
    }
  }
}
