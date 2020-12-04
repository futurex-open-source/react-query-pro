# React Query Pro

> Make asynchronous requests and manage data with ease using the patterns you are already familiar with 🔥😄🔥

[![NPM](https://img.shields.io/npm/v/react-query-pro.svg)](https://www.npmjs.com/package/react-query-pro) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
npm install --save react-query-pro
```

or

```
yarn add react-query-pro
```

## Usage

React query pro exposes two hooks `useGetQuery` and `useQuery`, a `Query` component, and a `makeRequest` function, all for handling and managing asynchronous request and data

#### useGetQuery

`useGetQuery` is used for fetching data by making a `GET` Request

```tsx
import React from 'react'
import { useGetQuery } from 'react-query-pro'

export const App = () => {
  const { isLoading, data, error, retry } = useGetQuery({
    url: 'http://localhost:3000/posts/1',
    method: 'GET'
  })

  if (isLoading) return <p>loading...</p>

  if (error)
    return (
      <div>
        <p>An unexpected error occurred {error.message}</p>

        <button onClick={retry}>retry</button>
      </div>
    )

  return (
    <div>
      <p>author: {data.author.name}</p>
      <p>message: {data.message}</p>
    </div>
  )
}

export default App
```

#### useQuery

The `useQuery` is a special hook for performing any form of `CRUD` operation. It returns functions `createQuery` for triggering such requests

```tsx
import React from 'react'
import { useQuery } from 'react-query-pro'

const App = () => {
  const { createQuery, isLoading, error, data } = useQuery({
    method: 'POST',
    url: 'http://localhost:3000/users/login'
  })

  const handleSubmit = async () => {
    try {
      const body = {
        // body of the request, in this case email and password for login
        email: 'johndoe@gmail.com',
        password: '12345'
      }

      const data = await createQuery(body)

      console.log({ data })
    } catch (error) {
      console.log({ error })
    }
  }

  return <button onClick={handleSubmit}>Send</button>
}

export default App
```

#### Query

The `Query` component uses the render prop pattern for making asynchronous request. It is best used when making multiple request in a single component.

```tsx
import React from 'react'
import { Query } from 'react-query-pro'

const App = () => {
  return (
    // For getting stories
    <Query url='http://localhost:3000/stories' method='GET'>
      {({ isLoading, error, data, retry }) => {
        if (isLoading) return <p>Fetching stories...</p>

        if (error)
          return (
            <>
              <p>An unexpected error occurred {error.message}</p>

              <button onClick={retry}>retry</button>
            </>
          )

        return <pre>{JSON.stringify(data)}</pre>
      }}
    </Query>

    // For getting posts
    <Query url='http://localhost:3000/posts' method='GET'>
      {({ isLoading, error, data, retry }) => {
        if (isLoading) return <p>Fetching user...</p>

        if (error)
          return (
            <>
              <p>An unexpected error occurred {error.message}</p>

              <button onClick={retry}>retry</button>
            </>
          )

        return <pre>{JSON.stringify(data)}</pre>
      }}
    </Query>
  )
}

export const App
```

#### makeRequest

`makeRequest` is a special utility function for making request when you don't want to use any of the `hooks` or the `Query` component

```tsx
const MakeRequestExample = () => {
  const handleSubmit = async () => {
    try {
      const response = await makeRequest({
        method: 'POST',
        url: 'http://localhost:3000/posts',
        data: {
          post: 'Hello world'
        }
      })

      console.log({ response })
    } catch (error) {
      console.log({ error })
    }
  }

  return <button onClick={handleSubmit}>Post</button>
}

export default MakeRequestExample
```

### Types

All relevant types are bundled and exported with the npm package

## Contributing

we hope to make this package the first option for making network request, so you are always welcome to make it better by contributing.

- Fork it!
- Create your feature branch: `git checkout -b feature-name`
- commit your changes: `git commit -am 'Some commit message`
- Push to the branch: `git push origin feature-name`
- Submit a pull request :muscle:
- Add your username to the [contributors' list](CONTRIBUTORS.md) 😄 🥰

## License

MIT © [UcheSylvester](https://github.com/UcheSylvester)
