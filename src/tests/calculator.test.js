/**
 * Unit tests for the CLI Calculator
 *
 * Covers all supported operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (×)
 *   - Division (÷)
 *   - Modulo (%)
 *   - Power (**)
 *   - Square Root (√)
 *
 * Includes edge cases: division/modulo by zero, negative inputs for sqrt,
 * negative numbers, decimals, zero inputs.
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Addition (+) ---
describe('add', () => {
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));
  test('0 + 0 = 0', () => expect(add(0, 0)).toBe(0));
  test('negative numbers: -4 + -6 = -10', () => expect(add(-4, -6)).toBe(-10));
  test('mixed sign: -5 + 10 = 5', () => expect(add(-5, 10)).toBe(5));
  test('decimals: 1.5 + 2.5 = 4', () => expect(add(1.5, 2.5)).toBe(4));
  test('large numbers: 1000000 + 999999 = 1999999', () => expect(add(1000000, 999999)).toBe(1999999));
});

// --- Subtraction (-) ---
describe('subtract', () => {
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));
  test('0 - 0 = 0', () => expect(subtract(0, 0)).toBe(0));
  test('negative result: 3 - 9 = -6', () => expect(subtract(3, 9)).toBe(-6));
  test('negative numbers: -5 - -3 = -2', () => expect(subtract(-5, -3)).toBe(-2));
  test('decimals: 5.5 - 2.5 = 3', () => expect(subtract(5.5, 2.5)).toBe(3));
  test('subtract zero: 7 - 0 = 7', () => expect(subtract(7, 0)).toBe(7));
});

// --- Multiplication (×) ---
describe('multiply', () => {
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));
  test('0 * 100 = 0', () => expect(multiply(0, 100)).toBe(0));
  test('negative * positive: -3 * 4 = -12', () => expect(multiply(-3, 4)).toBe(-12));
  test('negative * negative: -6 * -7 = 42', () => expect(multiply(-6, -7)).toBe(42));
  test('decimals: 2.5 * 4 = 10', () => expect(multiply(2.5, 4)).toBe(10));
  test('multiply by 1 (identity): 99 * 1 = 99', () => expect(multiply(99, 1)).toBe(99));
});

// --- Division (÷) ---
describe('divide', () => {
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));
  test('0 / 5 = 0', () => expect(divide(0, 5)).toBe(0));
  test('negative dividend: -10 / 2 = -5', () => expect(divide(-10, 2)).toBe(-5));
  test('negative divisor: 10 / -2 = -5', () => expect(divide(10, -2)).toBe(-5));
  test('decimals: 7 / 2 = 3.5', () => expect(divide(7, 2)).toBe(3.5));
  test('divide by itself: 8 / 8 = 1', () => expect(divide(8, 8)).toBe(1));

  // Edge case: division by zero
  test('throws on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });
  test('throws on 0 / 0', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
});

// --- Modulo (%) ---
describe('modulo', () => {
  test('5 % 2 = 1', () => expect(modulo(5, 2)).toBe(1));
  test('10 % 3 = 1', () => expect(modulo(10, 3)).toBe(1));
  test('0 % 5 = 0', () => expect(modulo(0, 5)).toBe(0));
  test('even number: 8 % 4 = 0', () => expect(modulo(8, 4)).toBe(0));
  test('negative dividend: -7 % 3 = -1', () => expect(modulo(-7, 3)).toBe(-1));
  test('decimals: 5.5 % 2 = 1.5', () => expect(modulo(5.5, 2)).toBe(1.5));

  // Edge case: modulo by zero
  test('throws on modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
  });
  test('throws on 0 % 0', () => {
    expect(() => modulo(0, 0)).toThrow('Modulo by zero is not allowed');
  });
});

// --- Power (**) ---
describe('power', () => {
  test('2 ^ 3 = 8', () => expect(power(2, 3)).toBe(8));
  test('2 ^ 8 = 256', () => expect(power(2, 8)).toBe(256));
  test('any number ^ 0 = 1', () => expect(power(99, 0)).toBe(1));
  test('any number ^ 1 = itself', () => expect(power(7, 1)).toBe(7));
  test('0 ^ 0 = 1', () => expect(power(0, 0)).toBe(1));
  test('negative base: -2 ^ 3 = -8', () => expect(power(-2, 3)).toBe(-8));
  test('fractional exponent: 9 ^ 0.5 = 3', () => expect(power(9, 0.5)).toBe(3));
  test('negative exponent: 2 ^ -1 = 0.5', () => expect(power(2, -1)).toBe(0.5));
});

// --- Square Root (√) ---
describe('squareRoot', () => {
  test('√16 = 4', () => expect(squareRoot(16)).toBe(4));
  test('√144 = 12', () => expect(squareRoot(144)).toBe(12));
  test('√0 = 0', () => expect(squareRoot(0)).toBe(0));
  test('√1 = 1', () => expect(squareRoot(1)).toBe(1));
  test('√2 ≈ 1.414', () => expect(squareRoot(2)).toBeCloseTo(1.414, 3));
  test('√25 = 5', () => expect(squareRoot(25)).toBe(5));

  // Edge case: square root of a negative number
  test('throws on square root of negative number', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed');
  });
  test('throws on square root of -100', () => {
    expect(() => squareRoot(-100)).toThrow('Square root of a negative number is not allowed');
  });
});
