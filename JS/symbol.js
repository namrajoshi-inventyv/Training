(() => {
    const arr1 = [1, 2, 3, 4, 5];

    // Destructure the array to get the firstElement and restElements
    const [firstElement, ...restElements] = arr1;
    
    // Create a Symbol for the first element
    const firstSymbol = Symbol();
    console.log(firstSymbol);

    fun2(firstSymbol, ...restElements.map(() => Symbol()));
})();

function fun2(firstSymbol, ...restSymbols) {
    const arr2 = [6, 7, 8, 9];

    // Unshift the first element using the firstSymbol
    arr2.unshift(firstSymbol);

    // Push the rest of the elements (Symbols) using spread syntax
    arr2.push(...restSymbols);

    // Use a unique identifier (e.g., 'initialValue') for Symbol-based calculations
    const initialValue = 'initialValue';

    const sumVal = arr2.reduce((accumulator, currentValue) => {
        // Check if the current value is a Symbol
        if (typeof currentValue === 'symbol') {
            return accumulator + initialValue;
        }
        return accumulator + currentValue;
    }, 0);

    const myPromise = new Promise((resolve, reject) => {
        sumVal > 30 ? resolve(sumVal) : reject("err");
    });

    myPromise
        .then((val) => {
            fetch(`https://picsum.photos/v2/list?limit=${val}`)
                .then((response) => response.json())
                .then((items) => {
                    items.map((item) => {
                        console.log(item.download_url);
                    });
                });
        })
        .catch((err) => alert(err));
}
