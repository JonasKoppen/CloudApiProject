var ex = require('express');
const request = require('request')
const cookie = require('cookie-parser')
// const bp = require('body-parser')

const hostname = '0.0.0.0';
const port = 3055;

const server = ex();

let expRouter = ex.Router();


server.use(ex.static("views"));
server.use(ex.static("public"));
server.use(ex.static(__dirname + '/dist'));
server.use('/assets', ex.static(__dirname+'/dist/src/app/assets'));

server.listen(port, hostname, () => {
    console.log(`Dev Ops Server running at http://${hostname}:${port}/`);
});
