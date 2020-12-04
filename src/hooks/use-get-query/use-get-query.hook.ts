import { useEffect, useState } from 'react'
import { UseGetQueryOptions, UseGetQueryValues } from '../../types'
import useQuery from '../use-query/use-query.hook'

const useGetQuery = (options: UseGetQueryOptions): UseGetQueryValues => {
  const [shouldRetry, setShouldRetry] = useState(false)

  const {
    handleError,
    handleSuccess,
    method = 'GET',
    shouldGet,
    ...otherOptions
  } = options

  const { makeQuery, ...otherValues } = useQuery({
    method,
    ...otherOptions
  })

  useEffect(() => {
    if (shouldGet && method === 'GET') {
      console.log({ shouldGet, otherOptions, method })

      makeQuery()
    }
  }, [shouldRetry])

  const retry = () => {
    setShouldRetry(!shouldRetry)
  }

  return {
    ...otherValues,
    retry,
    makeQuery
  }
}

export default useGetQuery
