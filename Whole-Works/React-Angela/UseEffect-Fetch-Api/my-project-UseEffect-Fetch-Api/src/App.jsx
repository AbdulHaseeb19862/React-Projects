import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function PageTitle() {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `Hi, ${name}`;
  }, [name]);

  return (
    <>
      <div>
        <p>Use {name} input field below to rename this page!</p>
        <input 
          onChange={({ target }) => setName(target.value)} 
          value={name} 
          type='text' 
        />
      </div>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PageTitle />
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={viteLogo} className="App-logo" alt="logo" />
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;