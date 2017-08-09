"use strict"
import express from 'express'
import path from 'path'

let app = express();
let view_path = "/../../views/";
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, view_path + 'home.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, view_path + 'contact.html'));
})

export default app;
