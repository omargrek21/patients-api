var express = require('express'),
    router = express.Router();

router.get('/', function(req,res) {
   res.send("hello from patients routes"); 
});

module.exports = router;