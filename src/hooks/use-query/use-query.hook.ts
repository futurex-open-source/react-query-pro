import { useReducer } from 'react'
import { QueryOptions, RequestReducerActionTypes } from '../../types'
import { handleRequest } from '../../utils/api.utils'
import useQueryReducer, { INITIAL_STATE } from './use-query.reducer'

const useQuery = ({
  handleError,
  handleSuccess,
  ...otherOptions
}: QueryOptions) => {
  const [state, dispatch] = useReducer(useQueryReducer, INITIAL_STATE)

  const makeQuery = async (body?: object) => {
    dispatch({ type: RequestReducerActionTypes.MAKE_REQUEST_START })

    try {
      const response = await handleRequest({
        data: body,
        ...otherOptions
      })

      const { data } = response

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
    isLoading: state.status === 'LOADING',
    makeQuery
  }
}

export default useQuery
