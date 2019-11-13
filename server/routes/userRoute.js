const express = require('express');
const router = express.Router();
const Entry = require('../model/entry');



 router.route('/all').get((req, res) =>{
     Entry.find({})
     .then((doc) =>{
        console.log(doc)
        res.json(doc)
     })
     .catch(err =>{
        console.log(err)
        res.status(400).json({err:err.message})
     })

 });

module.exports = router;