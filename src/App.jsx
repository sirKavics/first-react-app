import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from './Pages/About.jsx';
import Contact from './Pages/Contact';
import Nav from './Components/Nav.jsx';
import Users from './Pages/Users.jsx';
import CrashCourse from './Pages/CrashCourse.jsx';

function App() {
  
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CrashCourse" element={<CrashCourse />} />
          <Route path="/users/:id" element={<Users />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
