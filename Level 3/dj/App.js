import './App.css';
import Cards from './Cards'


function App() {
  return (
    <div className="App">
      <div className='cardContainer'>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      <div className='buttons'>
        <button>B&W</button>
        <button>Top Purple</button>
        <button>Bot Left Blue</button>
        <button>Bot Right Blue</button>
        <button>TL</button>
        <button>TR</button>
        <button>Bl</button>
        <button>BR</button>
        <button>Play</button>
      </div>
    </div>
  );
}

export default App;
