const roman_numeral_converter = require('../moduleA')

// Checks correct conversion of Roman Numeral 'I' to 1.
test('Converts I to 1', () => {
    expect(roman_numeral_converter('I')).toBe(1)
});