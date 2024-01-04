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

const inputNumber = 1745;
const primeCombinations = getCombinationsWithoutRepetition(inputNumber);
console.log(primeCombinations);
