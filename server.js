
const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());

let PORT = 3000;



app.get('/', (req, res) => {
  res.send('Hello from SERVER NODE API')
});


mongoose
.connect('mongodb+srv://andrew:0102030405@cluster0.y3goqgw.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=Cluster0')
.then( () => {
  console.log('Connected to mongoDB...');
  app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
  })  ;
}).catch( (err) => {
  console.log(`ERROR connecting to MongoDB...`, err);
})


// route for saving data into mongoDB/database
app.post('/product', (req, res) => {
  console.log(req.body);
  res.send(req.body)
})