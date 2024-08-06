import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelector from "./components/roleSelector/RoleSelector";
import Login from "./components/authComponent/Login";
import Register from "./components/authComponent/Register";
import { SendOtp } from "./components/authComponent/SendOtp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RoleSelector />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sendOtp" element={<SendOtp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
