const { test, expect } = require('@jest/globals')
const subtract = require('./subtract')

test('Properly substracts 2 numbers', () => {
expect(subtract(10, 8)).toBe(2)
})