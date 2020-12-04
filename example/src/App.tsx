import React from 'react'

import { useQuery } from 'react-query'
import 'react-query/dist/index.css'

const App = () => {
  const { makeQuery, isLoading, error, data } = useQuery({
    method: 'POST',
    url: 'https://socialbusinessconnect.com/api/login'
  })

  const sendData = async () => {
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

  console.log({ data })

  return (
    <>
      <h1>HELLO!!</h1>
      <button onClick={sendData}>Send</button>

      {isLoading && <p>loading...</p>}

      {error && <p>An error ocurred {error.message}</p>}

      {data && <pre>{JSON.stringify(data.data)}</pre>}
    </>
  )
}

export default App
