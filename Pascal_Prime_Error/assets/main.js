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
function getCombinationsWithoutRepetition(number) {
    const digits = number.toString().split('');
    const result = new Set();

    function combineWithoutRepetition(arr, length, current = []) {
        if (current.length === length) {
            const combinedNumber = parseInt(current.join(''));
            if (isPrime(combinedNumber)) {
                result.add(combinedNumber);
            }
            return;
        }

        for (let i = 0; i < arr.length; i++) {
            if (!current.includes(arr[i])) {
                combineWithoutRepetition(arr, length, current.concat(arr[i]));
            }
        }
    }

    for (let len = 1; len <= digits.length; len++) {
        combineWithoutRepetition(digits, len);
    }

    return Array.from(result);
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
                // Remove the entire row and break
                triangle.pop();
                return triangle;
            }
        }
        triangle[i].push(1);
    }
}

// Function to generate Pascal's Triangle and print prime numbers
function generatePascalsTriangleAndPrintPrimes() {
    // const inputNumber = prompt("Enter a number");
    const inputNumber = 3451;
    const primeCombinations = getCombinationsWithoutRepetition(inputNumber);
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

    // Display prime numbers in the browser excluding highlighted ones
    const remainingPrimes = primeCombinations.filter(num => !highlightedPrimes.has(num));
    primeNumbersDiv.innerHTML = `<p style="color : red";>Remaining Prime Numbers:</p>` + remainingPrimes.join(' ');
    outputDiv.appendChild(primeNumbersDiv);
}

// Call the main function
generatePascalsTriangleAndPrintPrimes();


