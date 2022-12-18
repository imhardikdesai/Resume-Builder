import './App.css';
import Theme1 from './Theme/Theme1/Theme1';
import ResumeState from './Context/ResumeState';
import { Button } from '@chakra-ui/react';

function App() {

  const printResume = () => {
    window.print();
  }

  return (
    <ResumeState>
      <div className="App">
        <div id="section-to-print">
          <Theme1 />
        </div>
        <Button className='m-5' onClick={() => printResume()}>Print</Button>
      </div>
    </ResumeState>
  );
}

export default App;
