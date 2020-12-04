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

  const { createQuery, ...otherValues } = useQuery({
    method,
    ...otherOptions
  })

  useEffect(() => {
    if (shouldGet && method === 'GET') {
      ;({ shouldGet, otherOptions, method })

      createQuery()
    }
  }, [shouldRetry])

  const retry = () => {
    setShouldRetry(!shouldRetry)
  }

  return {
    ...otherValues,
    retry,
    createQuery
  }
}

export default useGetQuery
