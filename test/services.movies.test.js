const assert = require('assert')
const proxyquire = require('proxyquire')

const { MongoLibMock, createStub, getAllStub } = require('../utils/mocks/mongoLib')

const { moviesMock, filteredMoviesMock } = require('../utils/mocks/movies')

describe("services - movies", function () {

    const MoviesService = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock
    })
    const moviesService = new MoviesService('movies')

    describe("when getMovies method is called", async function () {
        it('should call the getAll MongoLib method', async function () {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true)
        })

        it('should return an array of movies', async function () {
            const result = await moviesService.getMovies({})
            const expected = moviesMock
            assert.deepEqual(result, expected)
        })

        it('should return an array of movies filtered by tag "DRAMA" ', async function () {
            const result = await moviesService.getMovies({ tags: ["Drama"] })
            const expected = filteredMoviesMock("Drama")
            assert.deepEqual(result, expected)
        })
    })

    describe("when createMovie method is called", async function () {
        it('should call the create MongoLib method', async function () {
            await moviesService.createMovie(moviesMock[0]);
            assert.strictEqual(createStub.called, true)
        })
        it('should return the id of the movie created', async function () {
            const result = await moviesService.createMovie(moviesMock[0])
            const expected = moviesMock[0].id
            assert.deepEqual(result, expected)
        })
    })

})