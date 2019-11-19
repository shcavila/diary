const express = require('express');
const router = express.Router();
const Entry = require('../model/entry');


// router.route('/add').post((req,res) =>{
//     let entry = new Entry(req.body)
//     res.send('test');

// });
 router.route('/all').get((req, res) =>{
    Entry.find({})
    .then((doc)=>{
        console.log('this is the doc')
        console.log(doc)
        res.json(doc)
    })
    .catch(err =>{
        res.send(err)
    })
 });

module.exports = router;

{/* <div class="card w-75">
<h5 class="card-header">Featured</h5>
<div class="card-body">
  <h5 class="card-title">Special title treatment</h5>
  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */}