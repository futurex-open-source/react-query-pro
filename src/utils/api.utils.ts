import Axios, { AxiosPromise, AxiosRequestConfig } from 'axios'

export const makeRequest = (
  requestOptions: AxiosRequestConfig
): AxiosPromise => {
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
