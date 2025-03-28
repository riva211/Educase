import {  Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import Account from "./components/Account"

function App() {
  return (
    <div className="main">
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </div>
  );
}

export default App;
