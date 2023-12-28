//Given the value of n and r find combination using recursion

function factorial(x) {
    if (x == 0) {
        return 1;
    }
    else {
        return x * factorial(x - 1);
    }
}

function combination(n, r) {
    if (r === 0 || r === n) {
        return 1;
    } else {
        return factorial(n) / (factorial(r) * factorial(n - r));
    }
}

const n = 6;
const r = 2;
console.log(combination(n, r));

// const n = prompt('Please enter the value of n');
// const r = prompt('Please enter the value of r');
// const res = combination(n, r);
// document.write(res);