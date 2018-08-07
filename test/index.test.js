const assert = require('assert');
const response = require('../index');

describe('index.js', () => {
    describe('success', () => {
        it('should return a 200', () => {
            const success = response.success();
            assert.equal(200, success.statusCode);
        });
    });

    describe('failure', () => {
        it('should return a 500', () => {
            const failure = response.failure();
            assert.equal(500, failure.statusCode);
        });
    });
});
