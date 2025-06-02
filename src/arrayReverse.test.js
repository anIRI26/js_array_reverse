'use strict';

describe(`Function 'arrayReverse':`, () => {
  const arrayReverse = require('./arrayReverse');

  it(`should be declared`, () => {
    expect(arrayReverse).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {

  });

  it(`should return an empty string
    if original array consists of an empty string`, () => {
    expect(arrayReverse([''])).toEqual(['']);
  });

  // write more tests here
  it(`should return array with length
    = original length`, () => {
    expect(arrayReverse(['Iryna', 'Shtef'])).toEqual(['fethS', 'anyrI']);
  });

  it(`should return array with letters and numbers`, () => {
    expect(arrayReverse(['Irina26'])).toEqual(['62anirI']);
  });

  it(`should return array with letters and specail symbols`, () => {
    expect(arrayReverse(['!Iryna!', 'SHT'])).toEqual(['THS!any', 'rI!']);
  });

  it(`should return array with number and specail symbols`, () => {
    expect(arrayReverse(['26!', '!04!'])).toEqual(['!40', '!!62']);
  });
});
