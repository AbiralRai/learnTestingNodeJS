const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author.model');

//Describe our test
describe('Nesting records', () => {

    beforeEach(done => {
        mongoose.connection.collections.authors.drop(() => {
            done();
        })
    })

    //Create Test
    it('Creates an author with sub-docuemts', done => {

        let pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{ title: 'Name of the Wind', pages: 400 }]
        })

        pat.save().then(() => {
            Author.findOne({ name: 'Patrick Rothfuss' }).then(result => {
                assert(result.books.length === 1);
                done();
            })
        })
    });

    it('Adds new book to a author', done => {
        let pat = new Author({
            name: 'Patrick Rothfuss',
            books: [{
                title: 'Name of the Wind',
                pages: 400
            }]
        });

        pat.save().then(() => {
            Author.findOne({ name: 'Patrick Rothfuss' }).then(result => {
                result.books.push({ title: "Wise Man's Fear", pages: 500 });
                result.save().then(() => {
                    assert(result.books.length === 2);
                    done();
                })
            })
        })


    })
})