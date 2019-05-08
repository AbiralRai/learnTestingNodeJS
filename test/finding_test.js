const assert = require('assert');
const MarioChar = require('../models/marioChar.model');


//Describe tests
describe('Finding one records', () => {

    let mario;
    beforeEach((done) => {
        mario = new MarioChar({
            name: 'Mario'
        });

        mario.save().then(() => {
            assert(mario.isNew === false);
            done();
        });
    }); //mongoose method

    //Create tests
    it('Find one record on the database', (done) => {

        MarioChar.findOne({ name: 'Mario' }).then((result) => {
            assert(result.name === 'Mario');
            done();
        })

    })
    it('Find one record by ID on the database', (done) => {

        MarioChar.findOne({ _id: mario._id }).then((result) => {
            assert(result._id.toString() === mario._id.toString());
            done();
        })

    })
});