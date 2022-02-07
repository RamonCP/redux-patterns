import { CartTypes } from '../actions/cart'
import { showNotify, hideNotify } from '../actions/notify'

export const onAddBook =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action)

    if (action.type === CartTypes.ADD_BOOK) {
      dispatch(
        showNotify({ message: 'Book added successfully', type: 'success' })
      )

      setTimeout(() => {
        dispatch(hideNotify())
      }, 1500)
    }
  }

const cartMdl = [onAddBook]
export default cartMdl
