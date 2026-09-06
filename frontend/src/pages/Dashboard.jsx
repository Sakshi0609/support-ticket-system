import { useNavigate } from "react-router-dom";
import "../assets/css/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <nav className="navbar">
        <h2>Support Ticket System</h2>
        <button
              className="logout-btn"
              onClick={() => navigate("/")}
            >
              Logout
              
            </button>
      </nav>

      <main className="dashboard-content">

        <h1>Support Ticket Dashboard</h1>

        <p className="subtitle">
          Manage and track your support tickets
        </p>


        {/* Dashboard Cards */}
        <div className="dashboard-cards">

          <div className="dashboard-card">
            

            <h2>Create Ticket</h2>

            <p>
              Create a new support ticket
            </p>

            <button
              onClick={() => navigate("/create-ticket")}
            >
              Create New Ticket
            </button>
          </div>

          <div className="dashboard-card">
            

            <h2>View Tickets</h2>

            <p>
              View and manage all tickets
            </p>

            <button
              onClick={() => navigate("/tickets")}
            >
              View All Tickets
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;