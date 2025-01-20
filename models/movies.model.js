const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    movie_name: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },

})

const moviesModel = mongoose.model("movies", moviesSchema)

module.exports = moviesModel