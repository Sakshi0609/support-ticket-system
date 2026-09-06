import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
    {
        requestType: {
            type: String,
            required: true
        },

        pnr: {
            type: String,
            required: true
        },

        passengerName: {
            type: String,
            required: true
        },

        ticketNumber: {
            type: String,
            required: true
        },

        reissueReason: {
            type: String
        },

        changeDate: {
            type: Date
        },

        flightNumber: {
            type: String
        },

        remarks: {
            type: String
        },

        priority: {
            type: String,
            enum: ["Low", "Medium", "High"],
            default: "Medium"
        },

        status: {
            type: String,
            enum: ["Open", "In Progress", "Resolved", "Closed"],
            default: "Open"
        }
    },
    {
        timestamps: true
    }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;