const cors = require('cors');
const express = require('express');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public'));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

app.get('*', (req, res) => res.send('hello'));

app.listen(port, () => console.log(`server running on port ${port}`));
