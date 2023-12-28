//Write a function to first find fibonacci series from that function find prime numbers from that calculate cummulative differences and at the end find sum of that differences.

/*
Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
Prime Numbers: 2, 3, 5, 13
Cumulative Differences: 1, 2, 8
Sum of Differences:  -11
*/

function fibonacciSeries(n, memo = {}) {
    if (n === 0) return [0];
    if (n === 1) return [0, 1];

    if (memo[n]) return memo[n];

    const series = fibonacciSeries(n - 1, memo);
    series.push(series[n - 1] + series[n - 2]);
    memo[n] = series;

    return series;
}

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

function findAndListPrimes(arr) {
    return arr.filter(isPrime);
}

function calculateDiff(primeNumbers) {
    const differences = [];
    for (let i = 1; i < primeNumbers.length; i++) {
        differences.push(primeNumbers[i] - primeNumbers[i - 1]);
    }
    return differences;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const num = fibonacciSeries(10);
console.log("Fibonacci Series:", num.join(", "));

const primeNumbers = findAndListPrimes(num);
console.log("Prime Numbers:", primeNumbers.join(", "));

const diff = calculateDiff(primeNumbers);
console.log("Cumulative Differences:", diff.join(", "));

const sumOfDifferences = calculateSum(diff);
console.log("Sum of Differences: ", -sumOfDifferences);