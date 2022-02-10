import { bookFetch, updateBooks } from './books'

describe('Action: Books', () => {
  test('should return [BOOKS]: Init Fetch when action type equal BOOK_FETCH', () => {
    expect(bookFetch().type).toEqual('[BOOKS]: Init Fetch')
  })

  test('should return [BOOKS]: Update when action type equal UPDATE_BOOKS', () => {
    expect(updateBooks().type).toEqual('[BOOKS]: Update')
  })
})
