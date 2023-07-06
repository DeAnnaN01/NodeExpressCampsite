
const express = require('express');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());


app.all('/campsites', (req, res, next) => {
    res.statusCode =  200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});


// '/campsites' request group 
// get request
app.get('/campsite', (req, res) => {
    res.end('Will send all the campsites to you');
});

// post request
app.post('/campsites', (req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
});

// put request
app.put('/campsites', (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /campsites');
});

// delete request
app.delete('/campsites', (req, res) => {
    res.end('Deleting all campsites');
});


// '/campsites/:campsitesId' request group for individual campsite
// get request
app.get('/campsites/:campsiteId', (req, res) => {
    res.end(`Will send details of the campsite: ${req.params.campsiteId} to you`);
});

// post request
app.post('')

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
});


app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});