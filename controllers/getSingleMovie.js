const moongose = require('mongoose')
const moviesModel = require('../models/movies.model')

const getSingleMovie = async (req, res) => {
    // const moviesModel = moongose.model("movies")

    try {
        const moviesData = await moviesModel.findOne({ _id: req.params.movie_id })

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

module.exports = getSingleMovie