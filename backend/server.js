import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import ticketRoutes from "./routes/ticketroutes.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

// Connect MongoDB
connectDB();



// Ticket routes
app.use("/api/tickets", ticketRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});