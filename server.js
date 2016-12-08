const Hapi = require('hapi')

// Create a server with a host and port
const server = module.exports = new Hapi.Server()

// Connection
server.connection({
  host: 'localhost',
  port: 8000
})

// Routes
server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    return reply({message: 'Welcome!'})
  }
})

// Start the server, unless we're testing.
/* $lab:coverage:off$ */
if (!module.parent) {
  server.start((err) => {
    if (err) {
      throw err
    }
    console.log('Server running at:', server.info.uri)
  })
}
/* $lab:coverage:on$ */
