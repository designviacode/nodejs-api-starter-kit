"use strict"
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import PrettyError from 'pretty-error'
import errorhandler from 'errorhandler'
import path from 'path'
// Routes
import api from './app/routes/api';
import web from './app/routes/web';

let app = express();
let pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');
app.use(express.static('public'));
// parse form requests
app.use(bodyParser.urlencoded({ extended: true }));
// parse json
app.use(bodyParser.json({ limit: '50mb' }));
// cors support for backend api
app.use(cors());
// app.use(errorhandler());
app.use((err, req, res, next) => {
  console.log(pe.render(err));
});
// Config
let port = process.env.PORT || 8080;

// Server Routes
app.use('/', web);
app.use('/api', api);

app.all('*', (req, res) => {
  res.send({ message: 'Not Found' }, 404);
});

// Server Listening below
let server = app.listen(port, () => {
  console.log("Listening on port %s", server.address().port);
});
