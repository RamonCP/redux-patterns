import { Reducer } from 'redux'
import { CartTypesAction, CartTypes } from './cart.types'

const initialState: CartTypes = []

export const cartReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CartTypesAction.ADD_BOOK: {
      return [...state, action.payload]
    }

    default: {
      return state
    }
  }
}
