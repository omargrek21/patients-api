var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

    app.get('/', function(req, res){
        res.send("hello from aws");
    });

    app.listen(port, function(){
        console.log("APP IS RUNNING ON PORT " + port);
    })