import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx'; // Make sure you have this, or remove if not created yet
import Courses from './Pages/Courses.jsx';
import Contact from './Pages/Contact.jsx'; // Make sure you have this, or remove if not created yet
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Web from './Web.jsx';
import DataAnalysis from './DataAnalysis.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/web-development" element={<Web />} />
        <Route path="/data-analysis" element={<DataAnalysis />} />
      </Routes>
    </>
  );
}

export default App;