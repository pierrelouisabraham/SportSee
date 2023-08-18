/**
 * @file Manage the configuration setting for the mocked api using miragejs library
 * @see {@link https://miragejs.com/}
 * @namespace mockedApi
 */

import { createServer } from 'miragejs'
import data from '../utils/data'

const routes = [
  { name: '', data: data.USER_MAIN_DATA, findBy: 'id', timing: 1000 },
  {
    name: '/activity',
    data: data.USER_ACTIVITY,
    findBy: 'userId',
    timing: 2000,
  },
  {
    name: '/average-sessions',
    data: data.USER_AVERAGE_SESSIONS,
    findBy: 'userId',
    timing: 3000,
  },
  {
    name: '/performance',
    data: data.USER_PERFORMANCE,
    findBy: 'userId',
    timing: 4000,
  },
]

/**
 * Create a server to mock an api using miragejs libray
 * @memberof mockedApi
 * @see {@link https://miragejs.com/}
 * @method
 */
const create = () =>
  createServer({
    routes() {
      this.urlPrefix = 'http://localhost:3001'
      this.namespace = 'user'

      routes.forEach(
        (route) =>
          this.get(
            `/:id${route.name}`,
            (schema, request) => {
              const id = parseInt(request.params.id)
              return {
                data: route.data.find((user) => user[route.findBy] === id),
              }
            },
            { timing: route.timing }
          ) // slow down the response in order to better simulate an api
      )
    },
  })

export default create