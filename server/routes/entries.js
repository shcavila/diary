const express = require('express');
const router = express.Router();
const Entry = require('../model/entry');


// router.route('/add').post((req,res) =>{
//     let entry = new Entry(req.body)
//     res.send('test');

// });
 router.route('/all').get((req, res) =>{

 });

module.exports = router;