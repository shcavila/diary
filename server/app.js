const express = require('express');
const app = express();
const entryRoute = require('./routes/entries');
const cors = require('cors');
const port = process.env.PORT || 8081;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.send('hello world');
});

app.use(cors());
app.use('/diary', entryRoute);

app.listen(port, function(err){
    console.log(`listening to port ${port}`);
});
