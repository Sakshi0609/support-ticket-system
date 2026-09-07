# Support Ticket System

A full-stack support ticket management system built with React (frontend) and Node.js/Express + MongoDB (backend). Supports creating, viewing, searching, filtering, updating, and deleting support tickets.

## Tech Stack

**Frontend:** React, React Router, Vite
**Backend:** Node.js, Express, MongoDB, Mongoose

## Features

- Create support tickets with passenger, flight, and request details
- View all tickets in a searchable, filterable table
- Search by PNR, passenger name, ticket number, or flight number
- Filter by status (Open / In Progress / Closed) and priority (Low / Medium / High)
- Update ticket details and status
- Delete tickets


## Project Structure

```
Support Ticket System (InternTask)/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── ticketController.js
│   ├── models/
│   │   └── Ticket.js
│   ├── routes/
│   │   └── ticketroutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── CreateTicket.jsx
    │   │   ├── Tickets.jsx
    │   │   └── UpdateTicket.jsx
    │   ├── services/
    │   │   └── ticketApi.js
    │   ├── assets/css/
    │   └── App.jsx
    └── package.json
```

## Prerequisites

Before running this project, make sure you have installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally, or a MongoDB Atlas connection string)

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Sakshi0609/your-repo-name.git
cd "your-repo-name/Support Ticket System (InternTask)"
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder (if it doesn't already exist) with:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/support_ticket_db
```

If you're using MongoDB Atlas instead of a local database, replace `MONGO_URI` with your Atlas connection string.

Start MongoDB locally (skip this if using Atlas):

```bash
mongod
```

Start the backend server:

```bash
npm run dev
```

You should see:

```
Server is running on port 5000
mongodb connected successfully
```

The backend runs at `http://localhost:5000`.

### 3. Frontend setup

Open a **new terminal window** (keep the backend running in the first one):

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`.

### 4. Using the app

1. Open `http://localhost:5173` in your browser
2. Log in with any email/password (login is a UI-only form, no real authentication)
3. From the Dashboard, create a ticket or view all tickets
4. Use the search bar and filters on the Tickets page to narrow results
5. Click **Update** on any ticket to edit its details
6. Click **Delete** on any ticket to remove it

## API Endpoints

| Method | Endpoint              | Description              |
|--------|------------------------|--------------------------|
| GET    | `/api/tickets`         | Get all tickets (supports `?search=&status=&priority=` query params) |
| GET    | `/api/tickets/:id`     | Get a single ticket by ID |
| POST   | `/api/tickets`         | Create a new ticket       |
| PUT    | `/api/tickets/:id`     | Update a ticket by ID     |
| DELETE | `/api/tickets/:id`     | Delete a ticket by ID     |

## Troubleshooting

- **"Failed to fetch" errors** → Make sure the backend terminal is running (`npm run dev` inside `backend`) and hasn't been stopped.
- **"Failed to connect to MongoDB"** → Make sure `mongod` is running locally, or that your Atlas `MONGO_URI` is correct.
- **CORS errors in browser console** → Confirm `app.use(cors())` is present and uncommented in `backend/server.js`.
- **Update page blank/crashing** → Open browser DevTools (F12) → Console tab to see the exact error, and check that MongoDB is running so the ticket data can load.

## License

This project was built as part of an internship task.