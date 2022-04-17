const {add,fullName,isPalindrome,getCircumfrence,getArea} =  require('./index');

// positive test 
test('add 1+2 to equal 3',()=>{
    expect(add(1,2)).toBe(3);
})

test('add 9+8 to equal 17',()=>{
    expect(add(9,8)).toBe(17);
})
test('add 11+9 to equal 20',()=>{
    expect(add(11,9)).toBe(20);
})

// negative test 


test('add 9+12 to equal 21',()=>{
    expect(add(9,12)).toBe(2);
})


test(`add 7+5 to equal 15`,()=>{
expect(add(7,5)).toBe(11);
})

test(`add 7+5 to equal 15`,()=>{
    expect(add(7,5)).toBe(11);
})

// positive test
test(`fullName raj+kappor match to rajkappor`, ()=>{
    expect(fullName('raj','kappor')).toMatch('rajkappor')
})

test(`fullName radha+rajput match to radharajput`,()=>{
    expect(fullName("radha","rajput")).toMatch("radha rajput")
})

// positive test

test(`isPalindrome palinDrome toBeTruthy palinDrome `,()=>{
    expect( isPalindrome("palinDrome") ).toBeTruthy();
})



test(`isPalindrome palindrome toBeTruthy palindrome`,()=>{
    expect(isPalindrome("rajput")).toBeTruthy();
})

// positive test

test(`getCircumfrence 7 to equal 44 `,()=>{
expect(  getCircumfrence(7) ).toMatch(`44`)
})

test(`getArea 7 to equal 44 `,()=>{
    expect(  getArea(7) ).toMatch(`44`)
    } )

// negative test

test(`getCircumfrence 7 to equal 44 `,()=>{
        expect(  getCircumfrence(7) ).toMatch(`44`)
        })
        
test(`getArea 7 to equal 44 `,()=>{
            expect(  getArea(7) ).toMatch(`44`)
            } )