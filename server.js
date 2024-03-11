
console.log('Hello');

const express = require('express');
const { MongoDBCollectionNamespace } = require('mongodb');
const mongoose= require('mongoose');
const app = express();

let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
})


app.get('/', (req, res) => {
  res.send('Hello from SERVER NODE API')
});


mongoose
.connect('mongodb+srv://andrew:0102030405@cluster0.y3goqgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then( () => {
  console.log('Connected to mongoDB...');
}).catch( (err) => {
  console.log(`ERROR connecting to MongoDB...`, err);
})