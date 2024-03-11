
console.log('Hello');

const express = require('express');
const app = express();

let PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
})


app.get('/', (req, res) => {
  res.send('Hello from SERVER NODE API')
});
