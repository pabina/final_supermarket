import React from "react";
import Main from "./pages/Main";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import ShopNow from "./pages/ShopNow";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import MyAbout from "./pages/MyAbout";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shopNow" element={<ShopNow />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<MyAbout />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
