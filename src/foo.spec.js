const {test} = require("./foo");

describe('Test', () => {
    it('should add', () => {
        expect(test(1)).toBeGreaterThan(0);
    });
});
