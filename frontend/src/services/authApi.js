const BASE_URL = "http://localhost:5000/api/auth";

export const registerUser = (data) =>
  fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());