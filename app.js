var express = require('express');
var app = express();

app.get('/',function (req,res) {
    res.send("Hello World");
    res.status(404).send('Sorry, cant find that');

});

app.listen(4000);