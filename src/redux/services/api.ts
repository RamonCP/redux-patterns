import axios, { AxiosResponse } from 'axios'

export type ResponseGenerator = AxiosResponse

const getBooks = async (url: string): Promise<AxiosResponse | Error> => {
  try {
    const response = await axios(url)

    if (response) {
      return response
    }

    return new Error('Error on fetch books')
  } catch (err) {
    return new Error('Error on fetch books')
  }
}

export const services = {
  getBooks
}
