import React from 'react'

import { useQuery } from 'react-query'

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
      await makeQuery(body)

      // console.log({ data })
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
