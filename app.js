const express = require("express");
const fs = require("fs");

const app = express();

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

app.listen(8000, () => {
    console.log("Server connected successfully !")
})

