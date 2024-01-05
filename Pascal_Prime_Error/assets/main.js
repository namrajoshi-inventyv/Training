// Function to check if a number is prime
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

// Function to get combinations of digits without repetition
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

// Function to generate Pascal's Triangle up to a given number
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

// Function to generate Pascal's Triangle and print prime numbers
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

    // Print Pascal's Triangle and prime numbers 
    const outputDiv = document.getElementById('output');
    const primeNumbersDiv = document.createElement('div');
    const remainingPrimeNumbersDiv = document.createElement('div');
    const highlightedPrimes = new Set();  // Track highlighted primes

    for (let i = 0; i < pascalsTriangle.length; i++) {
        const row = pascalsTriangle[i];
        // Check if any element in the row exceeds the maxPrime
        if (row.some(element => element > maxPrime)) {
            // Remove the entire row if it exceeds
            pascalsTriangle.splice(i, 1);
            i--;  // Adjust the index after removal
            continue;
        }

        // Process each element in the row
        const rowText = row.map(element => {
            // Check if the element is a prime number in the combinations
            if (primeCombinations.includes(element)) {
                // Highlight prime numbers and add to the set
                highlightedPrimes.add(element);
                return `<span style="color: red; text-decoration:underline;">${element}</span>`;
            } else {
                // Store non-highlighted prime numbers for the remaining list
                remainingPrimeNumbersDiv.innerHTML += element + ' ';
                return element;
            }
        }).join(" ");

        const rowElement = document.createElement('p');
        rowElement.innerHTML = rowText;
        outputDiv.appendChild(rowElement);
    }

    //Display all combination
    const allCombinations = getCombinationsWithoutRepetition(inputNumber);
    const allCombinationsDiv = document.createElement('div');
    allCombinationsDiv.innerHTML = `<p style="color: red;">All Combinations of ${inputNumber}:</p>` + allCombinations.join(' ');
    outputDiv.appendChild(allCombinationsDiv);

    // Display all the prime numbers combinations
    const allPrimeCombinations = getCombinationsWithoutRepetition(inputNumber);
    const allPrimeNumbersDiv = document.createElement('div');
    const primeNumbersOnly = allPrimeCombinations.filter(isPrime);
    allPrimeNumbersDiv.innerHTML = `<p style="color: red;">All Prime Number Combinations:</p>` + primeNumbersOnly.join(' ');
    outputDiv.appendChild(allPrimeNumbersDiv);

    // Display prime numbers in the browser excluding highlighted ones
    const remainingPrimes = primeCombinations.filter(num => !highlightedPrimes.has(num));
    primeNumbersDiv.innerHTML = `<p style="color : red";>Remaining Prime Numbers:</p>` + remainingPrimes.join(' ');
    outputDiv.appendChild(primeNumbersDiv);

    // Calculate error ratio
    const totalPrimes = primeCombinations.length;
    const remainingPrimesCount = remainingPrimes.length;

    const errorRatio = (remainingPrimesCount / totalPrimes) * 100;

    // Display error ratio
    const errorRatioDiv = document.createElement('div');
    errorRatioDiv.innerHTML = `<p style="color : red";>Error Ratio: ${errorRatio.toFixed(2)}</p>`;
    outputDiv.appendChild(errorRatioDiv);
}

// Call the main function
PascalsTriangleAndPrintPrimes();