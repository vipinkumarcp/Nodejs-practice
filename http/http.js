const http = require('http');


// req is client requesting from webbrowser , res as server responding to client
const server = http.createServer((req, res) => {

    if (req.url == '/') {

        res.end('Welcome to our home page')
    }
    if(req.url == '/about'){
        res.end('Welcome to our about page')

    }

    //default response for all other requests
    res.end(`<h1> OOPS! Page not found</h1>`)
})


//port of server listing
server.listen(5000)