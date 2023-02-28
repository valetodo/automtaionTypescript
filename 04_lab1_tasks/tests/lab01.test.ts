import {getHighestNumber, getListString, palindrome} from "../src/lab01";


test("validate palindrome words", () => {
    expect(palindrome('ANA LAVA LANA')).toBeTruthy();
});

test("validate the highest number", () => {
    expect(getHighestNumber([2, 88, 65, 17, 95, 39])).toBe(95);
});

test("validate string to list string", () => {
    expect(getListString('Hello')).toEqual(['H', 'e', 'l', 'l', 'o']);
});
