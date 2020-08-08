const assert = require('assert')
const buildMessage = require('../utils/buildMessage')

describe('utils - buildMessage', function () {
    describe('when receives an entity and an action', function () {
        it('should return the respective message (movie, create)', function () {
            const result = buildMessage('movie', 'create')
            const expected = 'movie created'
            assert.strictEqual(result, expected)
        })
        it('should return the respective message (movie, retrieve)', function () {
            const result = buildMessage('movie', 'retrieve')
            const expected = 'movie retrieved'
            assert.strictEqual(result, expected)
        })
        it('should return the respective message (movie, delete)', function () {
            const result = buildMessage('movie', 'delete')
            const expected = 'movie deleted'
            assert.strictEqual(result, expected)
        })
        it('should return the respective message (movie, update)', function () {
            const result = buildMessage('movie', 'update')
            const expected = 'movie updated'
            assert.strictEqual(result, expected)
        })
    })
    describe('when receives an entity and an action and is a list', function () {
        it('should return the respective message with the entity in plural (movie, list)', function() {
            const result = buildMessage('movie', 'list')
            const expected = 'movies listed'
            assert.strictEqual(result, expected)
        })
    })
})