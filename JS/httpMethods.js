// Function to perform a GET request

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchData() {
  const result = await getData("http://localhost:3000/clients");
  console.log(result);
}

// fetchData();

// Function to perform a POST request
let dataPosted = false;
async function postData(url, body) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example usage for POST request
async function postNewClient() {
  // Check if data has already been posted
  if (!dataPosted) {
    const newClientData = {
      isActive: true,
      age: 28,
      name: "Neelam Doe",
      gender: "female",
      company: "ABC Corp",
      email: "femaledoe@abc.com",
      phone: "+1 (123) 456-7890",
      address: "123 Main Street, Anytown, USA",
    };

    const postResult = await postData(
      "http://localhost:3000/clients",
      newClientData
    );
    console.log("POST Result:", postResult);

    dataPosted = true;
  } else {
    console.log("Data has already been posted.");
  }
}

// Function to perform a PUT request
async function putData(url, body) {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example usage for PUT request
async function updateClient() {
  const clientIdToUpdate = "your_client_id_here"; // Replace with the actual client ID
  const updatedClientData = {
    // Update with the fields you want to modify
    name: "Updated Name",
    age: 30,
  };

  const putResult = await putData(
    `http://localhost:3000/clients/${clientIdToUpdate}`,
    updatedClientData
  );
  console.log("PUT Result:", putResult);
}

document.getElementById("post").addEventListener("click", async () => {
  await postNewClient();
});
document.getElementById("get").addEventListener("click", async () => {
  await fetchData();
});
