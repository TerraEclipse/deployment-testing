const assert = require('assert')
const server = require('../../server')
const lab = exports.lab = require('lab').script()
const {describe, it} = lab

describe('functional tests - hello', () => {
  it('should get the hello response', (done) => {
    server.inject({method: 'GET', url: '/'}, (res) => {
      assert(res.statusCode, 200)
      assert(res.headers['content-type'], 'application/json; charset=utf-8')
      assert.deepEqual(res.result, {message: 'Hello World!'})
      done()
    })
  })
})
