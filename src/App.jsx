import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
// import Register from "./pages/Register";

function App() {
  return (
    <Router>
      {/* Navbar is placed outside Routes so it's always visible */}
      <NavBar />  

      {/* Define Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
