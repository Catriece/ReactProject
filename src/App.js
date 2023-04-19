import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Fun With React!</h1>
        <p>Catriece's first react app!</p>
        <p>
          React is so cool!
        </p>
        <ul>
          <li>Can't wait to see how to use this to develop apps!</li>
          <li>I'm excited to learn more and apply what I know in the workplace!</li>
          <li>Thank you TrueCoders! I finally feel like it all is coming together!</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
