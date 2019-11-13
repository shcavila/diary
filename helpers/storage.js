const multer = require('multer');




// module.exports = {
//     storage: var storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, '../uploads');
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + '-' + Date.now())
//         }
//     });
// }const multer = require('multer');




module.exports = {
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '../uploads');
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now())
        }
    })
   
}