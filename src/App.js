import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';

function App() {
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');

  useEffect(() => {
    const consultarApiLetra = async () => {
      if (Object.keys(busquedaLetra).length === 0) return;
      const { artista, cancion } = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const resultado = await axios.get(url);
      setLetra(resultado);
    }
    consultarApiLetra();
  }, [busquedaLetra])

  return (
    <div className="App" >
      <Formulario setBusquedaLetra={setBusquedaLetra} />
    </div>
  );
}

export default App;
