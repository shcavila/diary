const express = require('express');
const router = express.Router();
const Entry = require('../model/entry');



 router.route('/all').get((req, res) =>{
     Entry.find({})
     .then((doc) =>{
        console.log('test')
        //console.log(doc[0].img.toString('base64'))
        res.json(doc)
     })
     .catch(err =>{
        console.log(err)
        res.status(400).json({err:err.message})
     })

 });

 
 router.route('/delete').post((req, res) =>{
Entry.findByIdAndRemove(req.body.id)
.then(doc =>{
res.send(doc)
console.log('result')
console.log(doc)
})
.catch(err=>{
   res.send(err)
})

});

module.exports = router;