const assert = require('assert');
const MarioChar = require('../models/marioChar.model');


//Describe tests
describe('Deleting records', () => {

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

    it('Updates one record from the database', done => {

        MarioChar.findOneAndUpdate({ name: 'Mario' }, { name: 'Luigi' }).then(() => {
            MarioChar.findOne({ _id: mario._id }).then(result => {
                assert(result.name === 'Luigi');
                done();
            })
        })
    })

});