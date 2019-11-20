const express = require('express');
const app = express();
const userRoute = require('./routes/userRoute');
const cors = require('cors');
const port = process.env.PORT || 8081;
const bodyParser = require('body-parser');
const store = require('../helpers/storage');
const multer = require('multer');
const fs = require('fs');
const Entry = require('./model/entry');
const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('../public'));
app.use(cors());
app.use('/diary', userRoute);
app.use('/static', express.static('../public'));

app.get('/', function (req, res) {
    res.send('hello world');
});

var upload = multer({
    storage: store.storage
});

let url = 'mongodb://localhost:27017/diary'

mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true  })
.then(() =>{
    console.log('connected');
})
.catch(err =>{
    console.log(err);
});


app.post('/diary/add', upload.single('img'), (req, res, next) => {
    console.log(req.body)
    let data = {
        title:req.body.title,
        body:req.body.body,
        img: req.file.filename
    };
    let entry = new Entry(data );

    entry.save()
    .then(() => {
        res.json({message:"Successfull"});
        console.log('saved')
    }).catch((err) => {
        res.status(400).json({err:err.message   })
    });
});

app.listen(port, function (err) {
    console.log(`listening to port ${port}`);
});