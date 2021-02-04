import dotenv from 'dotenv'

dotenv.config()

export default {

  rootPathBackendServer: (process.env.NODE_ENV === 'development')
    ? 'http://localhost:3030'
    : 'https://navastodobackend.herokuapp.com'
}
