import { Reducer } from 'redux'
import { NotifyTypesAction, NotifyTypes } from './notify.types'

const initialState: NotifyTypes = {
  show: false,
  message: '',
  type: ''
}

export const notifyReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case NotifyTypesAction.SHOW_NOTIFY: {
      return {
        show: true,
        message: action.payload.message,
        type: action.payload.type
      }
    }

    case NotifyTypesAction.HIDE_NOTIFY: {
      return initialState
    }

    default: {
      return state
    }
  }
}
