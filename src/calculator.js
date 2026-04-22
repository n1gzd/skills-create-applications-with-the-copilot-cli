#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition (+): adds two numbers
 *   subtract - Subtraction (-): subtracts the second number from the first
 *   multiply - Multiplication (×): multiplies two numbers
 *   divide   - Division (÷): divides the first number by the second
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 5 3       # => 8
 *   node calculator.js subtract 9 4  # => 5
 *   node calculator.js multiply 3 7  # => 21
 *   node calculator.js divide 10 2   # => 5
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

// Export functions for use as a module and for unit testing
module.exports = { add, subtract, multiply, divide };

// Only run CLI logic when executed directly (not when required as a module)
if (require.main === module) {
  const operations = { add, subtract, multiply, divide };

  const [,, op, rawA, rawB] = process.argv;

  if (!op || rawA === undefined || rawB === undefined) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  if (!operations[op]) {
    console.error(`Unknown operation "${op}". Supported: add, subtract, multiply, divide`);
    process.exit(1);
  }

  const a = Number(rawA);
  const b = Number(rawB);

  if (isNaN(a) || isNaN(b)) {
    console.error('Both arguments must be valid numbers');
    process.exit(1);
  }

  try {
    const result = operations[op](a, b);
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
