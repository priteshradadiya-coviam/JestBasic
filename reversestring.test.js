const reverseString = require('./reversestring');

test('reverse string', () => {
    expect(reverseString).toBeDefined();

});

test('reverse string works', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

const binaryStringToNumber = binString => {
    if (!/^[01]+$/.test(binString)) {
      throw new CustomError('Not a binary number.');
    }
  
    return parseInt(binString, 2);
  };
  
  describe('binaryStringToNumber', () => {
      describe('given a valid binary string', () => {
      test('returns the correct number', () => {
        expect(binaryStringToNumber('100')).toBe(4);
      });
    });
  });

  describe.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
  ])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(a + b).toBe(expected);
    });
  
    test(`returned value not be greater than ${expected}`, () => {
      expect(a + b).not.toBeGreaterThan(expected);
    });
  
    test(`returned value not be less than ${expected}`, () => {
      expect(a + b).not.toBeLessThan(expected);
    });
  });

  describe.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('$a + $b', ({a, b, expected}) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });
});

