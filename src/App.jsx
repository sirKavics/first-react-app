import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from './Pages/About.jsx';
import Contact from './Pages/Contact';
import Nav from './Components/Nav.jsx';
import Users from './Pages/Users.jsx';

function App() {
  
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:username" element={<Users />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
