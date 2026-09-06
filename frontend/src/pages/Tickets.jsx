import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Tickets.css";
import { getTickets, deleteTicket } from "../services/ticketApi";

function Tickets() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

const [tickets, setTickets] = useState([]);

useEffect(() => {
  getTickets()
    .then((data) => setTickets(data))
    .catch((err) => console.error("Failed to fetch tickets:", err));
}, []);
const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this ticket?");
  if (!confirmDelete) return;

  try {
    await deleteTicket(id);
    setTickets(tickets.filter((ticket) => ticket._id !== id));
    alert("Ticket deleted successfully!");
  } catch (error) {
    console.error(error);
    alert("Failed to delete ticket: " + error.message);
  }
};

  const filteredTickets = tickets.filter((ticket) => {

    const searchText = search.toLowerCase();

    const matchesSearch =
      ticket.pnr.toLowerCase().includes(searchText) ||
      ticket.passengerName.toLowerCase().includes(searchText) ||
      ticket.ticketNumber.toLowerCase().includes(searchText) ||
      ticket.flightNumber.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      ticket.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      ticket.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="tickets-page">

      <div className="tickets-header">

        <div>
          <h1>All Support Tickets</h1>
          <p>View and manage support tickets</p>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </button>

      </div>

      {/* Search and Filters */}

      <div className="filters">

        <input
          type="text"
          placeholder="Search by PNR, passenger, ticket number or flight..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="All">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

      </div>

      {/* Tickets Table */}

      <div className="ticket-table-container">

        <table>

          <thead>
            <tr>
              <th>PNR</th>
              <th>Passenger</th>
              <th>Ticket Number</th>
              <th>Flight</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {filteredTickets.length > 0 ? (

              filteredTickets.map((ticket) => (

               <tr key={ticket._id}>


                  <td>{ticket.pnr}</td>

                  <td>{ticket.passengerName}</td>

                  <td>{ticket.ticketNumber}</td>

                  <td>{ticket.flightNumber}</td>

                  <td>
                    <span className={`priority ${ticket.priority.toLowerCase()}`}>
                      {ticket.priority}
                    </span>
                  </td>

                  <td>
                    <span className={`status ${ticket.status
                      .toLowerCase()
                      .replace(" ", "-")}`}>
                      {ticket.status}
                    </span>
                  </td>

                                    <td>
                    <button
                      className="update-btn"
                      onClick={() => navigate(`/update-ticket/${ticket._id}`)}
                    >
                      Update
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(ticket._id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>

                

              ))

            ) : (

              <tr>
                <td colSpan="7" className="no-tickets">
                  No tickets found
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Tickets;