const moongose = require('mongoose')
const moviesModel = require('../models/movies.model')

const deleteMovie = async (req, res) => {
    // const moviesModel = moongose.model("movies")

    try {
        await moviesModel.deleteOne({ _id: req.params.movie_id });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
        return
    }

    res.status(200).json({
        status: "success",
        message: "Delete movie successfully"
    })
}

module.exports = deleteMovie