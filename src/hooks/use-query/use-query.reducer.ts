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

export const INITIAL_STATE: UseQueryState = {
  status: '',
  error: null,
  data: null
}

const useQueryReducer = (
  state: UseQueryState,
  action: RequestActions
): UseQueryState => {
  switch (action.type) {
    case RequestReducerActionTypes.MAKE_REQUEST_START:
      return {
        ...state,
        status: 'LOADING',
        error: null,
        data: null
      }

    case RequestReducerActionTypes.MAKE_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        error: null,
        data: action.payload
      }

    case RequestReducerActionTypes.MAKE_REQUEST_FAILURE:
      return {
        ...state,
        status: 'FAILED',
        error: action.payload,
        data: null
      }

    default:
      return state
  }
}

export default useQueryReducer
