const mongoose = require('mongoose');

//ES6 Gobal Promise
mongoose.Promise = global.Promise;

before((done) => {

    // Connect to mongoDB
    mongoose.connect('mongodb://localhost/test', { userNewUrlParser: true });

    mongoose.connection.once('open', () => {
        console.log('Connection has been made~');
        done();
    }).on('error', (err) => { console.log('Connection error: ', err) });
});


//Drop Character collection before each test

beforeEach((done) => {
    // Drop Collection
    mongoose.connection.collections.mariochars.drop(() => {
        done();
    });
})