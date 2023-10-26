const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1000;


// middleware
app.use(cors());
app.use(express.json());





app.get('/', (req, res) => {
    res.send('net fiction server is running');
  });
  
  app.listen(port, () => {
    console.log(`net fiction server running on ${port}`);
  })