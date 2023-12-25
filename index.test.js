// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require('./index');
const { expect, describe, test } = require('@jest/globals');

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe('Capitalize', () => {
  test('should return uppercased Hello', () => {
    expect(capitalize('hello')).toEqual('Hello');
  });

  it('should handle empty string using toBe', () => {
    expect(capitalize('')).toBe('');
  });

  it('should capitalize a single-letter word using toMatch', () => {
    expect(capitalize('a')).toMatch('A');
  });

  it('should capitalize the first letter of a sentence using toContain', () => {
    expect(capitalize('this is a test sentence.')).toContain('This is a test sentence.');
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe('FilterOddNumber', () => {
  it('should return [2, 4]', () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it('should return []', () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe('EpochDateToUTC', () => {
  it('should return Thu, 01 Jan 1970 00:00:00 GMT', () => {
    expect(epochDateToUTC(0)).toEqual('Thu, 01 Jan 1970 00:00:00 GMT');
  });

  it('should handle a different epoch date', () => {
    expect(epochDateToUTC(1609459200)).toMatch('Fri, 01 Jan 2021 00:00:00 GMT');
  });

  it('should handle negative epoch date', () => {
    expect(epochDateToUTC(-86400)).toContain('Wed, 31 Dec 1969 00:00:00 GMT');
  });

  it('should not return the same result for different epoch dates', () => {
    expect(epochDateToUTC(1609459200)).not.toEqual(epochDateToUTC(0));
  });

  it('should not return UTC time for an invalid epoch date', () => {
    expect(epochDateToUTC('invalid')).toBe('Invalid Date');
  });
});
