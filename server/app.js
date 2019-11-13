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

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function (req, res) {
    res.send('hello world');
});

app.use(cors());
app.use('/diary', userRoute);

var upload = multer({
    storage: store.storage
});

let url = 'mongodb://localhost:27017/diary'

mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true  })
.then(() =>{
    console.log('connected')
})
.catch(err =>{
    console.log(err)
});


app.post('/diary/add', upload.single('photo'), (req, res, next) => {
    let img = fs.readFileSync(req.file.path);
    let encode_image = img.toString('base64');
     finalImg = {
        contentType: req.file.mimetype,
        item: new Buffer.from(encode_image, 'base64')
    };
    let data = {
        title:req.body.title,
        body:req.body.body,
        img: finalImg.item
    };
    let entry = new Entry(data );

    entry.save()
    .then(() => {
        console.log('saved');
        res.json({message:"Successfull"});
    }).catch((err) => {
        console.log(err);
        res.status(400).json({err:err.message   })
    });
});

app.listen(port, function (err) {
    console.log(`listening to port ${port}`);
});