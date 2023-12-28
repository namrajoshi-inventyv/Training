// Function to perform a GET request

// function getData(url) {
//     return fetch(url)
//         .then(response => response.json())
//         .catch(error => console.error('Error:', error));
// }
async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


async function fetchData() {
    const result = await getData('https://jsonplaceholder.typicode.com/todos/1');
    console.log(result);
}

fetchData();