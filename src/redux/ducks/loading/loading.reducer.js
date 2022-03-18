import { TypesLoading } from './loading.actions'

const initialState = false

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypesLoading.SHOW_LOADING: {
      return true
    }

    case TypesLoading.HIDE_LOADING: {
      return false
    }

    default: {
      return state
    }
  }
}
