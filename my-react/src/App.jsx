// import logo from './logo.svg';
import './App.css';
import Button from './week_1/Button';
import ValidateForm from './week_1/Form';
// import Accordian from './week_1/Accordian';
// import Tabs from './week_1/Tabs';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button size='medium' color='stroke' children='Button'></Button>

        <Accordian title='Click here' children='Lorem asadadas'></Accordian>
        <Tabs />

      </header> */}
      <ValidateForm />


    </div>
  );
}

export default App;
