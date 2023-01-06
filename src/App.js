import './App.css';
import ResumeState from './Context/ResumeState';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Pages/About/About';

function App() {

  return (
    <ResumeState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
