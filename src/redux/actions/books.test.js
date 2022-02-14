import { fetchBooks, updateBooks } from './books'

describe('Action: Books', () => {
  test('should return [BOOKS]: Init Fetch when action type equal FETCH_BOOKS', () => {
    expect(fetchBooks().type).toEqual('[BOOKS]: Init Fetch')
  })

  test('should return [BOOKS]: Update when action type equal UPDATE_BOOKS', () => {
    expect(updateBooks().type).toEqual('[BOOKS]: Update')
  })
})
