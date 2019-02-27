let lookupChar = require('./03CharLookup');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Lookup Char', function(){
    it('should return undefined if 1st argument is not string', function(){
        let input = [1, 2];
        let index = 0;

        let result = lookupChar(input, index);
        expect(result).to.equal(undefined);
    });

    it('should return undefined if 2nd argument is not an int', function(){
        let input = 'string';
        let index = 'str';

        let result = lookupChar(input, index);
        expect(result).to.equal(undefined);
    });

    it('should return undefined if 2nd argument is not an int', function(){
        let input = 'string';
        let index = 1.23;

        let result = lookupChar(input, index);
        expect(result).to.equal(undefined);
    });

    it('should return "Incorrect index" if index = string length', function(){
        let input = 'string';
        let index = 6;

        let result = lookupChar(input, index);
        expect(result).to.equal('Incorrect index');
    });

    it('should return "Incorrect index" if index > string length', function(){
        let input = 'string';
        let index = 7;

        let result = lookupChar(input, index);
        expect(result).to.equal('Incorrect index');
    });

    it('should return "Incorrect index" if index is negative', function(){
        let input = 'string';
        let index = -3;

        let result = lookupChar(input, index);
        expect(result).to.equal('Incorrect index');
    });

    it('should return character at index if input is correct', function(){
        let input = 'string';
        let index = 5;

        let result = lookupChar(input, index);
        expect(result).to.equal('g');
    });

});