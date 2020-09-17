const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Cinema_Nodemy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Users = new Schema({
    theaterId: String,
    name: String,
    description: String,
    start: Date,
    end: Date,
    price: Number,
    seatsAvailable: Number,
    seats: [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
        , [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
        reservations: [ {
                    "_id": String
                  , "seats": []
                  , "price" : Number
                  , "total" : Number
                } ]
}, {
  collection: 'Sessions',
});

const Accouts = mongoose.model('Sessions', Users);
module.exports = Accouts;
