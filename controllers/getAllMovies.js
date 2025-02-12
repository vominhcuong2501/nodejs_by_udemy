const moongose = require('mongoose')
const moviesModel = require('../models/movies.model')

const getAllMovies = async (req, res) => {
    // const moviesModel = moongose.model("movies")

    try {
        const moviesData = await moviesModel.find()

        res.status(200).json({
            status: "success",
            data: moviesData
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
        return
    }
}

module.exports = getAllMovies