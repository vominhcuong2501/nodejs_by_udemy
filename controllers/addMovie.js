const addMovie = (req, res) => {

    const { movie_name, info, rating } = req.body

    // validations..

    // success!
    res.status(200).json({
        status: "success",
        message: "Movie assed successfully!",

    })
}

module.exports = addMovie