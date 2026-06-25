
const { add ,
     sub ,
      mult ,
       div ,
        even ,
         square ,
          odd,
           max,
           isPositive,
           isnav
       
        } = require("./function")
describe("add",() => {

test("add 2 + 3 = 5",()=> {
    expect(add(2,3)).toBe(5);


});
});
describe("sub",() => {

test("sub 2 - 3 = 1",()=> {
    expect(sub(2,3)).toBe(1);
});
});

describe("mult",() => {

test("mult 2 * 3 = 6",()=> {
    expect(mult(2,3)).toBe(6);
});
});

describe("div",() => {

test("div 2 / 4 = 2",()=> {
    expect(div(4,2)).toBe(2);


});

});
describe("even",() => {

test(`4 is even`,()=> {
    expect(even(4)).toBe(true);
});
});
describe("square",() => {

test("add 3 * 3=9",()=> {
    expect(square(3)).toBe(9);


});
});
describe("odd",() => {

test(`3 is odd`,()=> {
    expect(odd(3)).toBe(true);
});
});
describe("max",() => {

test(`7 is lager number`,()=> {
    expect(max(2,7)).toBe(7);
});
});
describe("isPositive",() => {

test(`isPositive`,()=> {
    expect(isPositive(3)).toBe(true);
});
});
describe("isnav",() => {

test(`isnav`,()=> {
    expect(isnav(3)).toBe(false);
});
});
