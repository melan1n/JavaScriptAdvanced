let mathEnforcer = require('./04MathEnforcer');

let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Math Enforcer', function () {
    it('should add 5 to a positive num', function () {
        let num = 2;
        let result = mathEnforcer.addFive(num);

        expect(result).to.equal(7);
    });

    it('should add 5 to a negative num', function () {
        let num = -2;
        let result = mathEnforcer.addFive(num);

        expect(result).to.equal(3);
    });

    it('should add 5 to a floating point num', function () {
        let num = 1.1;
        let result = mathEnforcer.addFive(num);

        expect(result).to.equal(6.1);
    });

    it('should return undefined if argument is not a number', function () {
        let num = 'alo';
        let result = mathEnforcer.addFive(num);

        expect(result).to.equal(undefined);
    });

    it('should subtract 10 from a positive num', function () {
        let num = 2;
        let result = mathEnforcer.subtractTen(num);

        expect(result).to.equal(-8);
    });

    it('should subtract 10 from a negative num', function () {
        let num = -2;
        let result = mathEnforcer.subtractTen(num);

        expect(result).to.equal(-12);
    });

    it('should subtract 10 from a floating point num', function () {
        let num = 2.3;
        let result = mathEnforcer.subtractTen(num);

        expect(result).to.equal(-7.7);
    });

    it('should return undefined if argument is not a number', function () {
        let num = 'alo';
        let result = mathEnforcer.subtractTen(num);

        expect(result).to.equal(undefined);
    });

    it('should return undefined if argument1 is not a number', function () {
        let num1 = 'alo';
        let num2 = 5;
        let result = mathEnforcer.sum(num1, num2);

        expect(result).to.equal(undefined);
    });

    it('should return undefined if argument2 is not a number', function () {
        let num2 = 'alo';
        let num1 = 5;
        let result = mathEnforcer.sum(num1, num2);

        expect(result).to.equal(undefined);
    });

    it('should return sum if arguments are positive nums', function () {
        let num1 = 2;
        let num2 = 5;
        let result = mathEnforcer.sum(num1, num2);

        expect(result).to.equal(7);
    });

    it('should return sum if arguments are negative nums', function () {
        let num1 = -2;
        let num2 = -5;
        let result = mathEnforcer.sum(num1, num2);

        expect(result).to.equal(-7);
    });

    it('should return sum if arguments are floating point nums', function () {
        let num1 = -2.1;
        let num2 = -5.5;
        let result = mathEnforcer.sum(num1, num2);

        expect(result).to.equal(-7.6);
    });
})