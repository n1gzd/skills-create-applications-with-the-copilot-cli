#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition (+): adds two numbers
 *   subtract   - Subtraction (-): subtracts the second number from the first
 *   multiply   - Multiplication (×): multiplies two numbers
 *   divide     - Division (÷): divides the first number by the second
 *   modulo     - Modulo (%): returns the remainder of a divided by b
 *   power      - Exponentiation (**): raises base to the given exponent
 *   squareRoot - Square Root (√): returns the square root of n
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 5 3           # => 8
 *   node calculator.js subtract 9 4      # => 5
 *   node calculator.js multiply 3 7      # => 21
 *   node calculator.js divide 10 2       # => 5
 *   node calculator.js modulo 10 3       # => 1
 *   node calculator.js power 2 8         # => 256
 *   node calculator.js squareRoot 144    # => 12
 */

// Addition (+): returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction (-): returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication (×): returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division (÷): returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed');
  return a / b;
}

// Modulo (%): returns the remainder of a divided by b
// Throws an error if b is zero to prevent modulo by zero
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero is not allowed');
  return a % b;
}

// Exponentiation (**): returns base raised to the power of exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root (√): returns the square root of n
// Throws an error for negative inputs as they produce imaginary numbers
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of a negative number is not allowed');
  return Math.sqrt(n);
}

// Export functions for use as a module and for unit testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// Only run CLI logic when executed directly (not when required as a module)
if (require.main === module) {
  const unaryOps = { squareRoot };
  const binaryOps = { add, subtract, multiply, divide, modulo, power };
  const allOps = Object.keys(binaryOps).concat(Object.keys(unaryOps)).join('|');

  const [,, op, rawA, rawB] = process.argv;

  if (!op || rawA === undefined) {
    console.error(`Usage: node calculator.js <${allOps}> <num1> [num2]`);
    process.exit(1);
  }

  if (!binaryOps[op] && !unaryOps[op]) {
    console.error(`Unknown operation "${op}". Supported: ${allOps}`);
    process.exit(1);
  }

  const a = Number(rawA);

  if (isNaN(a)) {
    console.error('Arguments must be valid numbers');
    process.exit(1);
  }

  try {
    let result;
    if (unaryOps[op]) {
      result = unaryOps[op](a);
    } else {
      const b = Number(rawB);
      if (rawB === undefined || isNaN(b)) {
        console.error(`Operation "${op}" requires two numeric arguments`);
        process.exit(1);
      }
      result = binaryOps[op](a, b);
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
