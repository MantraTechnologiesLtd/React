import './App.css';
import {Greet} from './Components/Greet'

function App() {
  return (
    <div className="App">
      <div>
        <Greet name='Puru' hero='Superman'/>
        <Greet name='John' hero='Spider'/>
        <Greet name='Simon' hero='Batman'/>
        <Greet name='Paul' hero='Hename'>
          <button>Action</button>
        </Greet>
        <Greet name='Peter' hero='Ironman'>
          <p>This is children porops</p>
        </Greet>
      </div>
    </div>
  );
}

export default App;
