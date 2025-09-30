const roman_numeral_converter = require('../moduleA')

// Checks correct conversion of Roman Numeral 'I' to 1.
test('Converts I to 1', () => {
    expect(roman_numeral_converter('I')).toBe(1);
});

// Checks correct conversion of Roman Numeral 'V' to 5.
test('Converts V to 5', () => {
    expect(roman_numeral_converter('V')).toBe(5);
});

// Checks correct conversion of Roman Numeral 'X' to 10.
test('Converts X to 10', () => {
    expect(roman_numeral_converter('X')).toBe(10);
});

// Checks correct conversion of Roman Numeral 'L' to 50.
test('Converts L to 50', () => {
    expect(roman_numeral_converter('L')).toBe(50);
});

