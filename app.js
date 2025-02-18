// use express
const express = require("express");

// config port
const port = 8000

require("dotenv").config();

const fs = require("fs");

// import controllers
const addMovie = require("./controllers/addNewMovie");
const getAllMovies = require("./controllers/getAllMovies");
const getSingleMovie = require("./controllers/getSingleMovie");
const editMovie = require("./controllers/editMovie");
const deleteMovie = require("./controllers/deleteMovie");

// connection to mongodb
const mongoose = require('mongoose');
const movieRecommendation = require("./controllers/movieRecommendation");
mongoose.connect(process.env.mongo_connection, {}).then(() => console.log("MongoDB connected")).catch((err) => console.log(err))

const app = express();

app.use(express.json());

//Models...
require("./models/movies.model");

// Routes...
app.post("/api/movies", addMovie);
app.get("/api/movies", getAllMovies);
app.get("/api/movies/:movie_id", getSingleMovie);
app.patch("/api/movies/:movie_id", editMovie);
app.delete("/api/movies/:movie_id", deleteMovie);
app.get("/api/movies/openai/getRecommendations", movieRecommendation);





app.listen(port, () => {
    console.log("Server connected successfully !")
})


// const nodemailer = require('nodemailer');
// const Minio = require('minio')

// // import entire SDK
// import AWS from 'aws-sdk';
// // import AWS object without services
// import AWS from 'aws-sdk/global';
// // import individual service
// import S3 from 'aws-sdk/clients/s3';
// // Cấu hình transporter cho nodemailer để gửi email qua MailHog
// const transporter = nodemailer.createTransport({
//     host: 'smtp.dinhtq.vn',  // Địa chỉ của MailHog
//     port: 1025,        // Cổng SMTP của MailHog
//     secure: false,      // MailHog không yêu cầu SSL
//     tls: {
//         rejectUnauthorized: false  // Bỏ qua xác thực SSL
//     }
// });

// // Route để gửi email
// app.get('/send-email', (req, res) => {
//     const mailOptions = {
//         from: '12321321@example.com',
//         to: 'receiver@example.com',
//         subject: 'Test Email from Express.js',
//         text: 'This is a test email sent using MailHog and Express.js'
//     };

//     // Gửi email
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send('Error occurred: ' + error.message);
//         }
//         res.send('Email sent successfully: ' + info.response);
//     });
// });

app.get("/", (req, res) => {
    // We will read file over here 
    fs.readFile("./data.txt", "utf-8", (err, data) => {
        if (err) res.send("There was an error accessing the file!")

        res.send(data);
    })
})

app.get("/write-new", (req, res) => {
    // write new data in file
    fs.writeFile("./data.txt", "Cellphone", (err) => {
        if (err) res.send("Error writing file!")

        res.send("Data written successfully!")
    })
})

app.get("/write-add", (req, res) => {
    // write add data in file
    // if file not exsist, it will be create new file
    fs.appendFile("./data.txt", "\nThegioididong", (err) => {
        if (err) res.send("Error writing file!")

        res.send("Data written successfully!")
    })
})

app.get("/fruits", (req, res) => {
    res.send("This is for  fruit")
})





