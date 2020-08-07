const express = require('express');
const CRUDService = require('../services/crud')

const {
    movieIdSchema,
    createMovieSchema,
    updateMovieSchema
} = require('../utils/schemas/movies')

const validationHandler = require('../utils/middleware/validationHandler')

function moviesApi(app) {

    const router = express.Router();
    app.use('/api/movies', router)

    const moviesService = new CRUDService('movies');

    router.get('/', async function (req, res, next) {
        const { tags } = req.query
        try {
            const movies = await moviesService.getDataByTags({ tags });
            
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        } catch (err) {
            next(err)
        }
    })
    router.get('/:movieId', validationHandler({movieId: movieIdSchema}, 'params'), async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const movies = await moviesService.getDataById(movieId);

            res.status(200).json({
                data: movies,
                message: 'movie retrieved'
            })
        } catch (err) {
            next(err)
        }
    })
    router.post('/', validationHandler(createMovieSchema), async function (req, res, next) {
        const { body: movie } = req
        try {
            const createMovieId = await moviesService.createData(movie);

            res.status(201).json({
                data: createMovieId,
                message: 'movies created'
            })
        } catch (err) {
            next(err)
        }
    })
    router.put('/:movieId', validationHandler({movieId: movieIdSchema}, 'params'), validationHandler(updateMovieSchema), async function (req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req
        try {
            const updatedMovieId = await moviesService.updateDataById( movieId, movie );

            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            })
        } catch (err) {
            next(err)
        }
    })
    router.delete('/:movieId', validationHandler({movieId: movieIdSchema}, 'params'), async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const deletedMovieId = await moviesService.deleteDataById(movieId);

            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            })
        } catch (err) {
            next(err)
        }
    })
}

module.exports = moviesApi