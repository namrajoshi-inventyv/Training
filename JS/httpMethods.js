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
  const clientIdToUpdate = "59761c233d8d0f92a6b0570d";
  const updatedClientData = {
    name: "Namra Joshi",
    age: 30,
  };

  const putResult = await putData(
    `http://localhost:3000/clients/${clientIdToUpdate}`,
    updatedClientData
  );
  console.log("PUT Result:", putResult);
}

// Function to perform a PATCH request
async function patchData(url, body) {
  try {
    const response = await fetch(url, {
      method: "PATCH",
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

// Example usage for PATCH request
async function partialUpdateClient() {
  const clientIdToPatch = "59761c23b30d971669fb42ff";
  const partialClientData = {
    age: 31,
    name: "Krushnashray",
    email: "krushnashray55@gmail.com",
  };

  const patchResult = await patchData(
    `http://localhost:3000/clients/${clientIdToPatch}`,
    partialClientData
  );
  console.log("PATCH Result:", patchResult);
}
// Function to perform a DELETE request
async function deleteData(url) {
  try {
    const response = await fetch(url, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Example usage for DELETE request
async function deleteClient() {
  const clientIdToDelete = "59761c23fcb6254b1a06dad5";

  const deleteResult = await deleteData(
    `http://localhost:3000/clients/${clientIdToDelete}`
  );
  console.log("DELETE Result:", deleteResult);
}


document.getElementById("post").addEventListener("click", async () => {
  await postNewClient();
});
document.getElementById("get").addEventListener("click", async () => {
  await fetchData();
});
document.getElementById("put").addEventListener("click", async () => {
  await updateClient();
});
document.getElementById("patch").addEventListener("click", async () => {
  await partialUpdateClient();
});
document.getElementById("delete").addEventListener("click", async () => {
  await deleteClient();
});
