import Ticket from "../models/Ticket.js";

// CREATE ticket
export const createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);

    res.status(201).json({
      message: "Ticket created successfully",
      ticket,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create ticket",
      error: error.message,
    });
  }
};


// GET all tickets
// GET all tickets + search + filter
export const getTickets = async (req, res) => {
  try {
    const { search, status, priority } = req.query;

    let filter = {};

    // Search
    if (search) {
      filter.$or = [
        { passengerName: { $regex: search, $options: "i" } },
        { ticketNumber: { $regex: search, $options: "i" } },
        { pnr: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by status
    if (status) {
      filter.status = status;
    }

    // Filter by priority
    if (priority) {
      filter.priority = priority;
    }

    const tickets = await Ticket.find(filter);

    res.status(200).json(tickets);

  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch tickets",
      error: error.message,
    });
  }
};


// GET single ticket
export const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }

    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch ticket",
      error: error.message,
    });
  }
};


// UPDATE ticket
export const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }

    res.status(200).json({
      message: "Ticket updated successfully",
      ticket,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to update ticket",
      error: error.message,
    });
  }
};


// DELETE ticket
export const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        message: "Ticket not found",
      });
    }

    res.status(200).json({
      message: "Ticket deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete ticket",
      error: error.message,
    });
  }
};