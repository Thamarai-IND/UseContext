import './App.css';
import CompOne from './components/CompOne';
import CompTwo from './components/CompTwo';
import UseContextHook from './components/UseContext';

function App() {
  return (
    <div className="App">

      <UseContextHook />
      <div style={{display: "flex", gap:"10px", justifyContent:"center"}}>
        <CompOne />
        <CompTwo />
      </div>
    </div>
  );
}

export default App;
