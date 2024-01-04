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

// Function to generate Pascal's Triangle and print prime numbers
function generatePascalsTriangleAndPrintPrimes() {
    const inputNumber = 7541;
    const primeCombinations = getCombinationsWithoutRepetition(inputNumber);
    const maxPrime = Math.max(...primeCombinations);
    const pascalsTriangle = generatePascalsTriangle(maxPrime);

    // Print Pascal's Triangle in the browser
    const outputDiv = document.getElementById('output');
    for (let i = 0; i < pascalsTriangle.length; i++) {
        const row = pascalsTriangle[i];

        // Check if any element in the row exceeds the maxPrime
        if (row.some(element => element > maxPrime)) {
            // Remove the entire row if it exceeds
            pascalsTriangle.splice(i, 1);
            i--;  // Adjust the index after removal
            continue;
        }

        const rowText = row.join(" ");
        const rowElement = document.createElement('p');
        rowElement.textContent = rowText;
        outputDiv.appendChild(rowElement);
    }

    // Print prime numbers in the console
    console.log("Prime Numbers:");
    primeCombinations.forEach(prime => console.log(prime));
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

// Call the main function
generatePascalsTriangleAndPrintPrimes();
