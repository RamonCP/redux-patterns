import { booksReducer } from './books'

describe('Reducer: Books', () => {
  test('should return initial state', () => {
    expect(booksReducer(undefined, {})).toEqual([])
  })
})
