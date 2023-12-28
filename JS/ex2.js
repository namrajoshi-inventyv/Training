// Wrie a Program to Store and display array using recursion

function storeAndDisplayArray(arr, index) {
    if (index === arr.length) {
        return;
    }

    let currElement = arr[index];
    console.log(`Displaying index ${index} element: ${currElement}`);

    storeAndDisplayArray(arr, index + 1);
}

let arr = [1, 2, 3, 4, 5];
storeAndDisplayArray(arr, 0);