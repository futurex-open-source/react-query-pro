import { AxiosRequestConfig } from 'axios'
import { useReducer } from 'react'
import { handleRequest } from '../../utils/api.utils'
import useQueryReducer, {
  INITIAL_STATE,
  RequestReducerActionTypes
} from './use-query.reducer'

export type UseQueryProps = {
  handleSuccess?: (data: any) => void
  handleError?: (error: any) => void
} & AxiosRequestConfig

const useQuery = ({
  handleError,
  handleSuccess,
  ...otherOptions
}: UseQueryProps) => {
  const [state, dispatch] = useReducer(useQueryReducer, INITIAL_STATE)

  const makeQuery = async (body?: any) => {
    dispatch({ type: RequestReducerActionTypes.MAKE_REQUEST_START })

    try {
      const response = await handleRequest({
        data: body,
        ...otherOptions
      })

      const { data } = response

      console.log({ response })

      dispatch({
        type: RequestReducerActionTypes.MAKE_REQUEST_SUCCESS,
        payload: data
      })

      handleSuccess && handleSuccess(data)

      return data
    } catch (error) {
      console.log({ error })

      dispatch({
        type: RequestReducerActionTypes.MAKE_REQUEST_FAILURE,
        payload: error
      })

      handleError && handleError(error)

      throw error
    }
  }

  return {
    ...state,
    makeQuery
  }
}

export default useQuery
