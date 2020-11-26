const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const httpApp = express();
const path = require('path')
const http = require('http');
const https = require('https');
const session = require('express-session');
var routes = require('./routes/index.js');
var partials = require('express-partials');
const fs = require("fs");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const { check, validationResult } = require('express-validator');
const options = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
};
var LocalStrategy   = require('passport-local').Strategy;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
routes(app);
app.use(partials());

app.use(express.static("views", { extensions: ['html'] }));

pass2 = "2";
function callback(responseText){
    var save = responseText;
    pass2 = save;
}

// init db
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "testdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

httpApp.get("*", function(req, res, next) {
    res.redirect("https://defineinclude.com" + req.path);
});

http.createServer(httpApp).listen(80, function() {
    console.log("Express TTP server listening on port 80");
});

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

https
  .createServer(
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
      ca: fs.readFileSync('chain.pem')
    },
    app
  )
  .listen(443, () => {
    console.log('Listening...')
  })
;

function userIsAllowed(callback, status) {
  // this function would contain your logic, presumably asynchronous,
  // about whether or not the user is allowed to see files in the
  // protected directory
  console.log(status);
  callback(status);
};

// This function returns a middleware function
var protectPath = function(regex) {
  return function(req, res, next) {
    if (!regex.test(req.url)) { return next(); }

    userIsAllowed(function(allowed) {
      if (allowed) {
        next(); // send the request to the next handler, which is express.static
      } else {
        res.end('You are not allowed!');
      }
    });
  };
};

app.use(protectPath(/pages\/protected\/.*$/));

 app.post('/auth', [
   check('username').trim().escape(),
   check('password').trim().escape()
 ], function(request, response) {
 	var username = request.body.username;
	 var password = request.body.password;
 	if (username && password) {
 		con.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
 			if (results.length > 0) {
 				request.session.loggedin = true;
 				request.session.username = username;
 				response.redirect('/web-development');
 			} else {
 				response.send('Incorrect Username and/or Password!');
 			}
 			response.end();
 		});
 	} else {
 		response.send('Please enter Username and Password!');
 		response.end();
 	}
 });
