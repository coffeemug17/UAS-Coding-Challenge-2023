import MultiplicationPanel from '../MultiplicationPanel/MultiplicationPanel.jsx';
import HistoryPanel from '../HistoryPanel/HistoryPanel.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <MultiplicationPanel />
        <HistoryPanel />
      </div>
    </div>
  );
}

export default App;
