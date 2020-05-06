const sum = require('./sum');
test('adds 1  + 2 to equal 3', () => {
    expect(sum.sum(1,2)).toBe(3);
});

test('Object assignment', () => {
    const data ={one:1};
    data['two']=2;
    expect(data).toEqual({one:1,two:2});
});

test('adding positive number is not zero',() =>{
    for(let a=1;a<10;a++){
        for(let b=1;b<10;b++){
            expect(a+b).not.toBe(0);
        }
    }
});

test('null', () =>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
});

test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('there is no p in radadiya', () => {
      expect('radadiya').not.toMatch(/p/);
      expect('radadiya').toMatch(/dad/);
  });

  const shoppingList = [
      'beer',
      'cola',
      'icecream',
  ];

  test('beer is in shopping list', () => {
      expect(shoppingList).toContain('beer');
      expect(new Set(shoppingList)).toContain('beer');
  });

  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }
  
  test('compiling android goes as expected', () => {
    expect(compileAndroidCode).toThrow();
    expect(compileAndroidCode).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    expect(compileAndroidCode).toThrow(/JDK/);
  });

  const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      area: 20,
      wallColor: 'white',
    },
  };
  const desiredHouse = {
    bath: true,
    kitchen: {
      amenities: ['oven', 'stove', 'washer'],
      wallColor: expect.stringMatching(/red|white/),
    },
  };
  
  test('the house has my desired features', () => {
    expect(houseForSale).toMatchObject(desiredHouse);
  });

  test('.toMatchObject is called for each elements, so extra object properties are okay', () => {
    expect([{foo: 'bar'}, {baz: 1, extra: 'quux'}]).toMatchObject([
      {foo: 'bar'},
      {baz: 1},
    ]);
  });



//working with async data
const functions = require('./sum.js');
test('user fetch name should be Leanne Graham', () => {
    // expect.assertions(1);
    return functions.functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    })
});

test('user fetch name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham');
});


  