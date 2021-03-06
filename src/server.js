const http = require ('http');
let mysql = require('mysql');
var allclients;

const express = require('express');
const newclient = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


//connection to BDD
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root123*',
    database: 'tfe'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
  //Query for all clients
  connection.query("SELECT * FROM clients", function (err, result) {

    if (err) throw err;
    console.log(result);
    allclients = result;
    console.log(allclients);

  });


  // imports route api clients 
    const clientsRoutes = require ('./api/routes/clients')
    const bookRoutes = require ('./api/routes/clients')

    newclient.use(morgan('dev'));
    newclient.use(bodyParser.urlencoded({extended: false}));
    newclient.use(bodyParser.json());

   /* newclient.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', '*');
      if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH ');
        res.status(200).json({});
      }
    })*/

    // Routes whitch should handle request
    newclient.use('/clients', clientsRoutes)
    newclient.use('/books', bookRoutes)

    newclient.use((req, res, next) => {
        const error = new Error('Not found');
        error.status = 404;
        next(error);
    })

    newclient.use((error, req, res, next) => {
        res.status(error.status || 500);
        res.json({
            error: {
                message: error.message
            }
        })

    });

  /*newclient.use((req, res, next) => {
    res.status(200).json(allclients);
});*/


//data for server
const port = process.env.port || 3014;

const server = http.createServer(newclient);

server.listen(port);