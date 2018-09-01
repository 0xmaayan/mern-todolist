export const config = {
  API_URL: process.env.NODE_ENV === 'production'
    ?
    'production.server'
    :
    'development.server'
}
