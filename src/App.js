import './App.css';
import ResumeState from './Context/ResumeState';
import BuilderArea from './Pages/BuilderArea';

function App() {

 
  return (
    <ResumeState>
      <div className="App">
        <BuilderArea />
      </div>
    </ResumeState>
  );
}

export default App;
