import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard"
import CreateTicket from "./pages/CreateTicket";
import Tickets from "./pages/Tickets";
import UpdateTicket from "./pages/UpdateTicket";
function App() {
  return ( 
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/update-ticket/:id" element={<UpdateTicket />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    );
 
}

export default App;