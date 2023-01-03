import './App.css';
import ResumeState from './Context/ResumeState';
import BuilderArea from './Pages/BuilderArea';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {


  return (
    <ResumeState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/resume" element={<BuilderArea />} />
        </Routes>
      </div>
    </ResumeState>
  );
}

export default App;
