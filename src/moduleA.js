function roman_numeral_converter(numeral) {
  const conversion_table = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50
  }

  const processed = numeral.toUpperCase();

  return conversion_table[processed];
}

module.exports = roman_numeral_converter;