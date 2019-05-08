const assert = require('assert');
const MarioChar = require('../models/marioChar.model');


//Describe tests
describe('Saving records', () => {

    //Create tests
    it('Saves a record to the database', (done) => {

        let mario = new MarioChar({
            name: 'Mario'
        });

        mario.save().then(() => {
            assert(mario.isNew === false);
            done();
        });//mongoose method

    })
});