/**
 * Unit tests for the CLI Calculator
 *
 * Covers all four supported operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (×)
 *   - Division (÷)
 *
 * Includes edge cases: division by zero, negative numbers, decimals, zero inputs.
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
