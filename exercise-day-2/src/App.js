import './App.css'
import Accordion from './component/Accordion';
import Button from './component/Button'
import Tab from './component/Tab';

function App() {
  return (
    <>
      {/* <Button size="medium" color="stroke">Click me</Button> */}

      <div className='lab-2'>
        <Accordion title="Item 1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae odio officia reprehenderit totam ea quis ducimus facere accusantium soluta minima, doloremque amet voluptatem perferendis culpa nam sint necessitatibus tempora neque.</Accordion>
        <Accordion title="Item 2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae odio officia reprehenderit totam ea quis ducimus facere accusantium soluta minima, doloremque amet voluptatem perferendis culpa nam sint necessitatibus tempora neque.</Accordion>
      </div>
      
      <Tab />
    </>
    
  );
}

export default App;
