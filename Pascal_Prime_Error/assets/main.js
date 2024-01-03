function getCombinationsWithoutRepetition(number) {
    const digits = number.toString().split('');
    const result = [];

    function combineWithoutRepetition(arr, length, current = []) {
        if (current.length === length) {
            result.push(parseInt(current.join('')));
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

    return result;
}

const inputNumber = 3451;
const combinations = getCombinationsWithoutRepetition(inputNumber);
console.log(combinations);
