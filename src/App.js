import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Error from './components/Error';
import Spinner from './components/Spinner';
import axios from 'axios';
import Biografia from './components/Biografia';

function App() {
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [biografia, setBiografia] = useState('');
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const consultarApiLetra = async () => {
      if (Object.keys(busquedaLetra).length === 0) return;
      setCargando(true);
      const { artista, cancion } = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      let letra, informacion;
      try {
        [letra, informacion] = await Promise.all([
          axios.get(url),
          axios.get(url2),
        ]);

      } catch (error) {
        setError(true);
        setCargando(false);
        return;
      }
      setLetra(letra.data.lyrics);
      setBiografia(informacion.data.artists[0]);
      setCargando(false);
    }
    consultarApiLetra();
  }, [busquedaLetra])

  return (
    <div className="App" >
      {error ? <Error mensaje="La no se econtró información" /> : null}
      <Formulario setBusquedaLetra={setBusquedaLetra} />
      {cargando ? <Spinner /> :
        (
          <div className="container mx-auto">
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
              <Biografia biografia={biografia} />
              <Cancion letra={letra} />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default App;
