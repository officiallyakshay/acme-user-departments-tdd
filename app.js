const express = require('express');
const db = require('./db');
const { Name } = db.models;

const app = express();
app.use(express.json());

module.exports = app;

app.get('/api/names', (req, res, next) => {
  Name.findAll()
    .then( names => res.send(names))
    .catch(next);
});

app.get('/api/names/:id', (req, res, next) => {
  Name.findByPk(req.params.id)
    .then( name => res.send(name))
    .catch(next);
});

app.put('/api/names/:id', (req, res, next) => {
  Name.findByPk(req.params.id)
    .then( name => name.update(req.body))
    .then( name => res.send(name))
    .catch(next);
});

app.post('/api/names', (req, res, next) => {
  Name.create(req.body)
    .then( name => res.status(201).send(name))
    .catch(next);
});

app.delete('/api/names/:id', (req, res, next) => {
  Name.findByPk(req.params.id)
    .then( name => name.destroy())
    .then( () => res.sendStatus(204))
    .catch(next);
});