const simpleMath = require('./node-example-073');
const assert = require('chai').assert;

describe('Math module', () => {
    it('should add 3 and 4 and return 7', () => {
        const result = simpleMath.add(3,4);
        assert.equal(7, result);
    });
    it('should subtract 3 from 12 and return 9', () => {
        const result = simpleMath.sub(12, 3);
        assert.equal(9, result);
    });
});