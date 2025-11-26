const baseUrl = "http://localhost:3001";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

//FETCHED ALL THE ITEMS
export const getItems = () => {
  return fetch(`${baseUrl}/items`).then(processServerResponse);
};

//POST /items POST
export const addItem = ({ name, imageUrl, weather }) => {
  // Client-side validation to prevent requests with missing data
  if (!name || !imageUrl || !weather) {
    return Promise.reject("Name, Image URL, and weather type are required.");
  }

  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather: weather.toLowerCase(),
    }),
  }).then(processServerResponse); // Assuming you have a response handler
};

// DELETE /items/:id DELETE
export const removeItem = (item) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${item._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(processServerResponse);
};
