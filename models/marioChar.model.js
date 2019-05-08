

const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

//Create Schema and Model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});

const MarioChar = mongoose.model('mariochar', MarioCharSchema);

// Example
// let player1 = new MarioChar({
//     name: 'Player1',
//     weight: 50
// });

module.exports = MarioChar;


