import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { from, concat } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

export default ctx => {
  const ssrMiddleware = setContext((_, { headers }) => {
    if (process.client) return headers
    return {
      headers: {
        ...headers,
        connection: ctx.app.context.req.headers.connection,
        referer: ctx.app.context.req.headers.referer,
        cookie: ctx.app.context.req.headers.cookie
      }
    }
  })

  const csrfMiddleware = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'X-CSRFToken': ctx.app.$cookies.get('csrftoken') || null
      }
    }
  })
  const httpLink = new HttpLink({
    uri: 'http://localhost:8000/graphql/',
    credentials: 'include'
  })
  const link = from([csrfMiddleware, ssrMiddleware, httpLink])
  const cache = new InMemoryCache()

  return {
    link,
    cache,
    // без отключения стандартного apollo-module HttpLink'a в консоль сыпятся варнинги
    defaultHttpLink: false
  }
}
