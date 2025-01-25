# JavaScript Null Value Handling

This repository demonstrates a common error in JavaScript related to handling null values and provides a solution.  Improper handling of null values can result in unexpected behavior, such as runtime errors or incorrect calculations.

## Bug Description
The `foo` function in `bug.js` demonstrates a scenario where null values are not explicitly checked, leading to potential issues. The solution in `bugSolution.js` adds appropriate null checks to handle these cases gracefully.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` to see the problematic code.
3. Run the `foo` function with null values as arguments. Observe the outcome.
4. Open `bugSolution.js` to view the corrected version of the code.
5. Run the `foo` function in `bugSolution.js` with null values as arguments. Compare the results.

## Solution
The solution involves adding explicit checks for null values before performing operations on them.  This prevents runtime errors and ensures the function handles null inputs correctly.