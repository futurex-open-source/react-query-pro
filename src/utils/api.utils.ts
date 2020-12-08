import Axios, { AxiosPromise } from 'axios'
import { RequestOptions } from '../types'

export const makeRequest = (requestOptions: RequestOptions): AxiosPromise => {
  const { method, data, url } = requestOptions
  const axiosConfig = {
    method,
    url,
    ...(data && { data }),
    ...requestOptions
  }

  try {
    const response = Axios(axiosConfig)

    return response
  } catch (error) {
    return error
  }
}
