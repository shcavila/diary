const express = require('express');
const router = express.Router();
const Entry = require('../model/entry');
const multer = require('multer');
const fs = require('fs');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({
    storage: storage
});

router.route('/add/img',upload.single('myFile')).post((req, res) => {
    console.log(req.file);
    // var img = fs.readFileSync(req.file.path);
    // var encode_image = img.toString('base64');

    // var finalImg = {
    //     contentType: req.file.mimetype,
    //     item: new Buffer(encode_image, 'base64')
    // };
    // console.log(finalImg)


    console.log(req.body);
    res.send('test');

});

module.exports = router;