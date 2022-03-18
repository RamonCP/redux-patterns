export const CartTypes = {
  ADD_BOOK: '[CART]: book added',
  REMOVE_BOOK: '[CART]: book removed'
}

export const AddBook = (book) => ({
  type: CartTypes.ADD_BOOK,
  payload: book
})

export const RemoveBook = (id) => ({
  type: CartTypes.REMOVE_BOOK,
  payload: id
})
