const cloneArray = require('./cloneArray')

test('Clones array properly', () => {
    const array = [1, 2, 3]
expect(cloneArray(array)).toEqual(array)
})