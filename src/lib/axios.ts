import Axios from 'axios'

import { toast } from 'react-toastify'
import { API_URL } from '../config'

export const axios = Axios.create({
  baseURL: API_URL
})

axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error.response?.data?.message || error.message

    if (message === 'Network Error')
      toast.error('Verifique a conexão com o servidor!', {
        toastId: 'networkError'
      })
    return Promise.reject(error)
  }
)
