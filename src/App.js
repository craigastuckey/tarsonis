import logo from './logo.svg';
import './App.css';
import StatusButton from './components/StatusButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <StatusButton />
    </div>
  );
}

export default App;
