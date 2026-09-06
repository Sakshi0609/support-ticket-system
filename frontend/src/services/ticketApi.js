const BASE_URL = "http://localhost:5000/api/tickets";

export const getTickets = () =>
  fetch(BASE_URL).then((res) => res.json());

export const getTicketById = (id) =>
  fetch(`${BASE_URL}/${id}`).then((res) => res.json());

export const createTicket = (data) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

export const updateTicket = (id, data) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  export const deleteTicket = (id) =>
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" }).then((res) => res.json());