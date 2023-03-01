import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navigation from "./components/Navigation";
import Register from "./components/pages/Register";
import UserProfile from "./components/pages/UserProfile";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route exact path="/user/profile" element={<UserProfile/>} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;