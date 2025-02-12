const moongose = require('mongoose')
const moviesModel = require('../models/movies.model')

const editMovie = async (req, res) => {
    // const moviesModel = moongose.model("movies")

    const { movie_name, info, rating, } = req.body

    try {
        await moviesModel.updateOne({ _id: req.params.movie_id }, { movie_name, info, rating }, { runValidators: true });

    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message
        })
        return
    }

    res.status(200).json({
        status: "success",
        message: "Update movie successfully"
    })
}

module.exports = editMovie