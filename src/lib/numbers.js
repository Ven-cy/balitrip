const gujaratiDigits = '૦૧૨૩૪૫૬૭૮૯'

/** Convert Latin digits in a value to Gujarati digits. */
export const toGujaratiNumber = (value) =>
  String(value).replace(/\d/g, (digit) => gujaratiDigits[digit])

/** Convert a value to a zero-padded Gujarati number, e.g. 1 → "૦૧". */
export const toGujaratiPadded = (value, length = 2) =>
  toGujaratiNumber(String(value).padStart(length, '0'))
