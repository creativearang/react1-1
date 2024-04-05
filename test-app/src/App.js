import logo from './logo.svg';
import './App.css';
import Welcome from './chapter_04/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Welcome name="용재"></Welcome>
      <Welcome name="용재"></Welcome>
      <Welcome name="용재"></Welcome>
    </div>
  );
}

export default App; //외부에서 컴포넌트를 사용가능하게 한다.
