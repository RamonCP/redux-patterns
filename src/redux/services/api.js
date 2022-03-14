import axios from 'axios'

export const services = {
  getBooks: (url) => {
    return axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => err)
  }
}
