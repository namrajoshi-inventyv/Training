# Q. Find all permutations and combinations of a number provided by the user and after that find prime numbers from that and highlight that prime number in Pascal's triangle in the browser and also display the remaining prime numbers and calculate the error ratio.
##
```
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
```
### 
- This function checks if a given number num is prime.
- It starts by checking if num is less than or equal to 1; if so, it returns false (1 is not prime, and negative numbers aren't considered prime).
- Then, it runs a loop from 2 to the square root of num. If num is divisible evenly by any number in this range, it returns false as the number is not prime.
- If the loop completes without finding a divisor, the function returns true, indicating that the number is prime.

```
const result = [];
function getCombinationsWithoutRepetition(num) {
    const digits = num.toString().split('');

    function combineWithoutRepetition(nums, path = []) {
        if (path.length > 0 && parseInt(path.join('')) !== num) {
            result.push(parseInt(path.join('')));
        }

        if (path.length === digits.length) {
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            const newNums = nums.filter((_, index) => index !== i);
            path.push(nums[i]);
            combineWithoutRepetition(newNums, path);
            path.pop();
        }
    }

    combineWithoutRepetition(digits);
    return result.filter((n, index) => result.indexOf(n) === index);
}
```
###
- This function generates combinations of digits without repetition for a given number num.
- It starts by converting the number to a string and splitting it into an array of individual digits.
- The combineWithoutRepetition function is a recursive function that generates combinations and stores them in the result array.
- It checks if the current combination is not the original number and then adds it to the result array.
- The recursion continues until the length of the combination equals the number of digits in the input number.
- The final result is obtained by filtering out duplicate combinations.

```
function generatePascalsTriangle(maxPrime) {
    const triangle = [];
    triangle[0] = [1];

    for (let i = 1; ; i++) {
        triangle[i] = [1];
        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];

            // Check if any element in the row exceeds the maxPrime
            if (triangle[i][j] > maxPrime) {
                // Remove the last row
                triangle.pop();
                return triangle;
            }
        }
        triangle[i].push(1);
    }
}
```
###
- This function generates Pascal's Triangle up to a given maximum prime number maxPrime.
- It initializes an empty array triangle and starts with the first row [1].
The outer loop increments for each row, and the inner loop calculates each element in the row based on the values from the previous row.
- It checks if any element in the row exceeds the maxPrime. If so, it removes the last row and returns the truncated Pascal's Triangle.

```
function PascalsTriangleAndPrintPrimes() {
    let inputNumber;
    do {
        inputNumber = prompt("Enter a number with at least 4 digits");
    } while (inputNumber.length < 4);
    let arr = getCombinationsWithoutRepetition(inputNumber);
    arr = [...new Set(arr)];
    const primeCombinations = arr.filter(isPrime);
    const maxPrime = Math.max(...primeCombinations);
    const pascalsTriangle = generatePascalsTriangle(maxPrime);

    // Rest of the code to interact with the user and display information
}
```
###
- This function is the main driver that interacts with the user, generates combinations, highlights prime numbers in Pascal's Triangle, and displays relevant information.
- It prompts the user to enter a number with at least 4 digits using a do-while loop.
- It generates unique combinations for the input number and filters out prime combinations.
- It calculates the maximum prime from the filtered combinations and generates Pascal's Triangle up to that value.
- The rest of the code interacts with the user and displays the Pascal's Triangle with highlighted prime numbers, all combinations, and remaining prime numbers. It also calculates and displays the error ratio.


#### 
**Author: Namra Joshi**
