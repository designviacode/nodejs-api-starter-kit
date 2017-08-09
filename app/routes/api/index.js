"use strict"
import express from 'express'


let app = express();
let todosData = [
  { _id: 1, title: "Fetch Groceries", isCompleted: false },
  { _id: 2, title: "Fetch Eggs", isCompleted: false },
  { _id: 3, title: "Fetch Chocolates", isCompleted: true },
  { _id: 4, title: "get Scooty Fixed", isCompleted: false },
  { _id: 5, title: "Fetch Candies", isCompleted: false },
];

app.get('/welcome', (req, res) => {
  res.send({ message: 'Welcome !' });
});
app.get('/todos', (req, res) => {
  res.json({ todos: todosData });
});
app.get('/todos/:id', (req, res) => {
  res.send(todosData.filter((crr, i) => crr["_id"] === parseInt(req.params.id)));
});
app.put('/todos/:id/edit', (req, res) => {
  res.send({ message: 'Edit current TODO !' });
});
app.delete('/todos/:id/delete', (req, res) => {
  res.send({ message: 'Delete current TODO !' });
});

export default app;
