const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url)

    if (req.url === '/cars') {
        res.end("This is cars")
    } else if (req.url === '/fruits') {
        res.end("This is for fruits :)")
    } else {
        res.end("Hello from the server")
    }
});

server.listen(8000, "localhost", () => {
    console.log(" Server is started")
})