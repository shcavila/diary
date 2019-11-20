const express = require('express');
const router = express.Router();
const Entry = require('../model/entry');
const path = require('path')
const multer = require('multer')
const store =path.join(__dirname, '../../helpers')



router.route('/all').get((req, res) => {
     
   Entry.find({})
   .sort({createdAt:-1})
      .then((doc) => {
       console.log(doc)
         res.json(doc);
         
      })
      .catch(err => {
         console.log(err)
         res.status(400).json({ err: err.message })
      })

});


router.route('/delete').post((req, res) => {
   Entry.findByIdAndRemove(req.body.id)
      .then(doc => {
         if (doc) {
            res.json(doc)
         } else {
            res.end()
         }
      })
      .catch(err => {
         res.send(err)
      })

});

router.route('/update').post((req, res) => {
   Entry.findById(req.body.id)
      .then(doc => {
         if (doc) {
            res.json(doc)
         } else {
            res.end()
         }
      })
      .catch(err => {
         res.send(err)
      });

});
router.route('/update/:entryID').post((req, res) => {
      let date = new Date()
   let data = {
         title: req.body.title,
         body: req.body.body,
         editedAt: date.toISOString()
   }
   let options = {
         new: true
   }
   Entry.findByIdAndUpdate(req.params.entryID, req.body, options )
      .then(doc => {
         if (doc) {
            res.json(doc)
         } else {
            res.end()
         }
      })
      .catch(err => {
         res.send(err)
      })

});


module.exports = router;