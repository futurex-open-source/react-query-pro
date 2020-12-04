import React from 'react'
import useGetQuery from '../../hooks/use-get-query/use-get-query.hook'
import { QueryProps } from '../../types'

const Query = ({
  children,
  method = 'GET',
  shouldGet: isGet,
  ...otherOptions
}: QueryProps) => {
  const shouldGet = method === 'GET' || isGet

  // console.log({ shouldGet, method })

  const values = useGetQuery({ ...otherOptions, shouldGet, method })

  return <React.Fragment>{children(values)}</React.Fragment>
}

export default Query
