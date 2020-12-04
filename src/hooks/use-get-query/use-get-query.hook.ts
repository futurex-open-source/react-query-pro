import { useEffect, useState } from 'react'
import { UseGetQueryOptions } from '../../types'
import useQuery from '../use-query/use-query.hook'

const useGetQuery = (options: UseGetQueryOptions) => {
  const [shouldRetry, setShouldRetry] = useState(false)

  const {
    handleError,
    handleSuccess,
    method,
    shouldGet = true,
    ...otherOptions
  } = options

  const { makeQuery, ...otherValues } = useQuery({
    method: method === 'GET' ? method : 'GET',
    ...otherOptions
  })

  useEffect(() => {
    if (shouldGet) {
      makeQuery()
    }
  }, [shouldRetry])

  const retry = () => {
    setShouldRetry(!shouldRetry)
  }

  return {
    ...otherValues,
    retry
  }
}

export default useGetQuery
