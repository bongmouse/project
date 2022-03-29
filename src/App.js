import logo from './logo.svg';
import './App.css';
import First from './component/first';
import Second from './component/second';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          testetstet
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <First/>
      <Second/>
      <h1>테스트입니다. </h1>
    </div>
  );
}

export default App;
