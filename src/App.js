import mago from './img/mago.png';
import './App.css';
import { useState } from 'react';
import Personajes from './components/Personajes';




function App() {

  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://raw.githubusercontent.com/adriansoriagarcia/JsonHP/main/characters.json');
    // https://hp-api.onrender.com/api/characters/students
    const characterApi = await api.json();
    setCharacters(characterApi);
    //console.log(characterApi);
    
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Harry Potter</h1>
        {characters ? (
          <Personajes characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={mago} alt="Harry Potter" className="img-home" /> 
            <button onClick={reqApi} className="btn-search">Buscar Personajes </button>
          </>
        )}
        
        
      </header>
    </div>
  );
}

export default App;
