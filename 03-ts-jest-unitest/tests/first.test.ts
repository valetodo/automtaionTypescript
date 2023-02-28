import {Calculadora} from "../src/calculadora";
import {Task} from "../src/task";
// import {Task} from "../../04-lab1-tasks/src/task";

test.skip('adds 1 + 2 to equal 3', () => {
    const calc = new Calculadora();
    const actual = calc.sumNumber(1, 2);
    const expc = 3;

    expect(actual).toBe(expc);
});

test.skip('adds 1 - 2 to equal -1', () => {
    const calc = new Calculadora();
    const actual = calc.resNumb(1, 2);
    const expc = -1;

    expect(actual).toBe(expc);
});

test.skip('retornar el numero mas grande', () => {
    const input = [2, 88, 65, 17, 95, 39];
    const greatterNumber = jest.fn((input: number[]) => 95);
    const actual = greatterNumber(input);
    const expc = 95;

    expect(actual).toBeGreaterThanOrEqual(expc);
});

test('retornar si numero es par', () => {
    const input = 16;
    const actual = Task.esPar(input);

    expect(actual).toBeTruthy();
});


const dd = 'He-Fl-o';
console.log(dd.split('-'));
