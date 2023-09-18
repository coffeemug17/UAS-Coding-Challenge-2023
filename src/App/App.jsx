import { useState } from 'react';
import MultiplicationPanel from '../Components/MultiplicationPanel/MultiplicationPanel.jsx';
import HistoryPanel from '../Components/HistoryPanel/HistoryPanel.jsx';
import './App.css';

function App() {
  const [tableSize, setTableSize] = useState(12);
  const [history, setHistory] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <MultiplicationPanel size={tableSize} history={history} setHistory={setHistory} />
        <HistoryPanel history={history} />
      </div>
      <div className='sizing'>
        <label htmlFor='table-size'>Table Size: </label>
        <input type="number" 
          id="tableSize" 
          value={tableSize} 
          onChange={(e) => setTableSize(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
}

export default App;
