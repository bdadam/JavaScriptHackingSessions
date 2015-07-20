var expect = require('chai').expect;

var add = require('../add.js');

describe('Testing "add" module', function() {

    describe('Two numbers', function() {
        it('5 + 3 shoudl equal 8', function() {
            expect(add(5, 3)).to.equal(8);
        });
    });

    describe('Strings', function() {
        it('should NOT convert strings to numbers', function() {
            expect(add('5', '3')).to.equal('53');
        });
    });

    /*
    describe('Many numbers', function() {
        it('5 + 3 + 12 should equal 20', function() {
            expect(add(5, 3, 12)).to.equal(20);
        });

        it('5 + 3 + 12 + 20 should equal 40', function() {
            expect(add(5, 3, 12, 20)).to.equal(40);
        });
    });
    */

});