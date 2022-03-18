import { CartTypes } from './cart.actions'

const initialState = []

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartTypes.ADD_BOOK: {
      return [...state, action.payload]
    }

    default: {
      return state
    }
  }
}
