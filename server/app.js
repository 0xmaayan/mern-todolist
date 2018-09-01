const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const api = require('./routes/index');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV !== 'production';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());


// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// Set up Mongoose
mongoose.connect(isDev ? process.env.DB_DEV : process.env.DB_PRODUCTION, { useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database`);
});

app.use('/api',api);

if(!isDev){
// Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, '../build')))
// Anything that doesn't match the above, send back index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../build/index.html'))
  })
}

app.listen(port, () => console.log(`Listening on port ${port}`));
