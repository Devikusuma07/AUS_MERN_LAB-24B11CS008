const http = require('http');
const myServer = http.createServer((req, res) => {
    res.write("Server was created sucessfully");
    res.end();
});
myServer.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});