const assert = require('assert');
const MarioChar = require('../models/marioChar.model');


//Describe tests
describe('Deleting records', () => {

    let mario, lugi;
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

    it('Deletes one record from the database', done => {
        MarioChar.findOneAndRemove({ name: 'Mario' }).then(() => {
            MarioChar.findOne({ name: 'Mario' }).then(result => {
                assert(result === null);
                done();
            })
        })
    })
});