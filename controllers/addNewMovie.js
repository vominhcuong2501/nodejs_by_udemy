const moongoose = require('mongoose')
const moviesModel = require('../models/movies.model')

const addMovie = async (req, res) => {

    // const moviesModel = moongoose.model("movies")

    const { movie_name, info, rating } = req.body

    // validations..
    try {
        if (!movie_name || !info || !rating) throw 'Missing required fields'

    } catch (error) {
        return res.status(400).json({
            status: "fail",
            message: error
        })
        return
    }

    try {
        // create movie
        const createMovie = await moviesModel.create({
            movie_name, info, rating
        })

    } catch (error) {
        return res.status(400).json({
            status: "fail",
            message: "Movie create failed. Something went wrong."
        })
        return
    }

    // success!
    res.status(200).json({
        status: "success",
        message: "Movie added successfully!",

    })
}

module.exports = addMovie