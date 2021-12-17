import Accordion from './components/Accordion'
import Inputs from './components/Inputs';
import Tab from './components/Tab';

function App() {
  let style = {
    boxShadow: '0px 0px 1px 1px #ccc',
    width: 300, 
    padding: 15,
    borderRadius: 12,
    margin: '10px auto'
  }
  return (
    <div className="App">
      <section className='AccodionBox' style={style}>
        <Accordion title="connected devices" color="#eb10e7" text="some text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries
        </Accordion>
        <Accordion title="connected devices" url="img/2.svg" color="#595958">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries
        </Accordion>
        <Accordion title="connected devices" url="img/3.svg" color="#03ab17" text="some text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries
        </Accordion>
        <Accordion title="connected devices" url="img/4.svg" color="#1aa4d9" text="some text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries
        </Accordion>
        <Accordion title="connected devices" url="img/5.svg" color="#e30000" text="some text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries
        </Accordion>
        <Accordion title="connected devices" url="img/6.svg" color="#e8ce4d" text="some text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries
        </Accordion>
        
      </section>
      <Tab />
      <Inputs/>
      <Inputs icon='left'/>
      <Inputs icon='right'/>

      <Inputs label = ''/>
      <Inputs icon='left' label = ''/>
      <Inputs icon='right' label = ''/>
    </div>
  );
}

export default App;
