// Function to perform a GET request

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

// fetchData();


// Function to perform a POST request
async function postData(url, body) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}


// Function to perform a POST request
let dataPosted = false;
async function postData(url, body) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Example usage for POST request
async function postNewClient() {
  // Check if data has already been posted
  if (!dataPosted) {
    const newClientData = {
      "isActive": true,
      "age": 28,
      "name": "John Doe",
      "gender": "male",
      "company": "ABC Corp",
      "email": "johndoe@abc.com",
      "phone": "+1 (123) 456-7890",
      "address": "123 Main Street, Anytown, USA"
    };

    const postResult = await postData('http://localhost:3000/clients', newClientData);
    console.log('POST Result:', postResult);

    dataPosted = true;
  } else {
    console.log('Data has already been posted.');
  }
}


document.addEventListener('DOMContentLoaded', async () => {
  // await postNewClient();
});
// fetchData();
  