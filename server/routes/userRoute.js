const express = require('express');
const router = express.Router();
const Entry = require('../model/entry');



router.route('/all').get((req, res) => {
   Entry.find({})
      .then((doc) => {
         res.json(doc)
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
            res.send('Successfully deleted')
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
      })

});
router.route('/update/:entryID').post((req, res) => {
   console.log(req.params.entryID)
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
      })

});


module.exports = router;