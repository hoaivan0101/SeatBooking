const express = require('express');
var app = express();
var models = require('./models/sessions')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public',express.static('public'))

app.get('/:id/reservation', function (req, res) {
    res.sendfile('index.html')
})

app.get('/reservation/:id', function (req, res) {
    models.findOne({
        _id:req.params.id
    })
        .then(data => {
        res.json(data)
    })
})

app.post('/reservation/:id', function (req, res) {
    var seat = req.body.seats;
    models.updateOne({
        _id:req.params.id
    },{seats:seat})
        .then(data => {
        res.json(data)
    })
})

app.listen(3000);