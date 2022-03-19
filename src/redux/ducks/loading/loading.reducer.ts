import { Reducer } from 'redux'
import { LoadingTypesAction, LoadingTypes } from './loading.types'

const initialState: LoadingTypes = false

export const loadingReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case LoadingTypesAction.SHOW_LOADING: {
      return true
    }

    case LoadingTypesAction.HIDE_LOADING: {
      return false
    }

    default: {
      return state
    }
  }
}
