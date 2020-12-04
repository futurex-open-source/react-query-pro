import { AxiosRequestConfig } from 'axios'

export type QueryOptions = AxiosRequestConfig & {
  handleSuccess?: (data: any) => void
  handleError?: (error: any) => void
}

export enum RequestReducerActionTypes {
  MAKE_REQUEST_START = 'MAKE_REQUEST_START',
  MAKE_REQUEST_SUCCESS = 'MAKE_REQUEST_SUCCESS',
  MAKE_REQUEST_FAILURE = 'MAKE_REQUEST_FAILURE'
}

export type RequestStatus = 'LOADING' | 'SUCCESS' | 'FAILED' | ''

export type UseQueryState = {
  status: RequestStatus
  error: any
  data: any
}

export type RequestActions = {
  type: RequestReducerActionTypes
  payload?: any
}