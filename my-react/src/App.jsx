import logo from './logo.svg';
import './App.css';
import Button from './week_1/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button size='large' color='white' children= 'Button'></Button>
      </header>
    </div>
  );
}

export default App;
