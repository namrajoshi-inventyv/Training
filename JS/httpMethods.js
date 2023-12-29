// Function to perform a GET request

// function getData(url) {
//     return fetch(url)
//         .then(response => response.json())
//         .catch(error => console.error('Error:', error));
// }
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

async function fetchData() {
  const result = await getData('http://localhost:3000/clients');
  console.log(result);
}

fetchData();
  