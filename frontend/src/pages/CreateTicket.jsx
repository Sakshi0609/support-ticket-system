import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/CreateTicket.css";
import { createTicket } from "../services/ticketApi";
function CreateTicket() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    requestType: "",
    pnr: "",
    passengerName: "",
    ticketNumber: "",
    reissueReason: "",
    changeDate: "",
    flightNumber: "",
    priority: "Medium",
    remarks: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const data = await createTicket(formData);
    alert("Ticket created successfully!");
    navigate("/dashboard");
  } catch (error) {
    console.error(error);
    alert("Failed to create ticket: " + error.message);
  }
};

  return (
    <div className="create-ticket">

      <div className="ticket-header">
        <h1>Create Support Ticket</h1>

        <button onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Request Type</label>

          <select
            name="requestType"
            value={formData.requestType}
            onChange={handleChange}
            required
          >
            <option value="">Select Request Type</option>
            <option value="Reissue">Reissue</option>
            <option value="Refund">Refund</option>
            <option value="Cancellation">Cancellation</option>
            <option value="Date Change">Date Change</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>PNR</label>

          <input
            type="text"
            name="pnr"
            value={formData.pnr}
            onChange={handleChange}
            placeholder="Enter PNR"
            required
          />
        </div>

        <div className="form-group">
          <label>Passenger Name</label>

          <input
            type="text"
            name="passengerName"
            value={formData.passengerName}
            onChange={handleChange}
            placeholder="Enter passenger name"
            required
          />
        </div>

        <div className="form-group">
          <label>Ticket Number</label>

          <input
            type="text"
            name="ticketNumber"
            value={formData.ticketNumber}
            onChange={handleChange}
            placeholder="Enter ticket number"
            required
          />
        </div>

        <div className="form-group">
          <label>Reissue Reason</label>

          <input
            type="text"
            name="reissueReason"
            value={formData.reissueReason}
            onChange={handleChange}
            placeholder="Enter reason"
          />
        </div>

        <div className="form-group">
          <label>Change Date</label>

          <input
            type="date"
            name="changeDate"
            value={formData.changeDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Flight Number</label>

          <input
            type="text"
            name="flightNumber"
            value={formData.flightNumber}
            onChange={handleChange}
            placeholder="Enter flight number"
          />
        </div>

        <div className="form-group">
          <label>Priority</label>

          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group">
          <label>Remarks</label>

          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleChange}
            placeholder="Enter remarks"
            rows="4"
          />
        </div>

        <button type="submit" className="create-btn">
          Create Ticket
        </button>

      </form>

    </div>
  );
}

export default CreateTicket;