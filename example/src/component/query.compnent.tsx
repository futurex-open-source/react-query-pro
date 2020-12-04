import React from 'react'

import { useQuery, useGetQuery } from 'react-query'

export const UseQuery = () => {
  const { makeQuery, isLoading, error, data } = useQuery({
    method: 'POST',
    url: 'https://socialbusinessconnect.com/api/login'
  })

  const handleSubmit = async () => {
    const body = {
      email: 'ucee@gmail.com',
      password: '111111'
    }

    try {
      const data = await makeQuery(body)

      console.log({ data })
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <>
      <button onClick={handleSubmit}>Send</button>

      {isLoading && <p>loading...</p>}

      {error && <p>An error ocurred {error.message}</p>}

      {data && <pre>{JSON.stringify(data.data)}</pre>}
    </>
  )
}

export const UseGetQuery = () => {
  const { isLoading, data, error, retry } = useGetQuery({
    url: 'https://fakestoreapi.com/products',
    method: 'GET'
  })

  if (isLoading) return <p>loading...</p>

  if (error)
    return (
      <>
        <p>An unexpected error occurred {error.message}</p>

        <button onClick={retry}>retry</button>
      </>
    )

  return <pre>{JSON.stringify(data)}</pre>
}
