import './App.css';
import Theme1 from './Theme/Theme1/Theme1';
import { Button } from '@chakra-ui/react';
// import Navbar from './Components/Navbar/Navbar';

function App() {
  const printResume = () => {
    window.print();
  }
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div id="section-to-print">
        <Theme1 />
      </div>
      <Button className='m-5' onClick={() => printResume()}>Print</Button>
    </div>
  );
}

export default App;
