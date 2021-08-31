import React, { useState } from 'react'; 
import './App.css';
import ListOfGifs from './components/ListOfGifs';

// Vamos a llegar a un nivel más y vamos a hacer que la lista de gifs (gifs.map)  sea también, a su vez un componente.
// Recordar que en React toooodo puede ser un componente. 
// Creamos entonces el componente ListOfGifs.js en el fichero components.

function App() {
  const [keyword,setKeyword] = useState('panda');

  return (
    <div className="App-content">
      <section>
        <button onClick={() => setKeyword('mapache')}></button>
        <ListOfGifs keyword={"pretty woman"} />
      </section>

    </div>
      
  )
}

export default App; 


// De esta forma vamos viendo que nuestra aplicación cada vez tiene menos información 

// Lo último que hacemos es mover el useState y useEffect dentro del componente ListOfGifs para que quede todo mucho más limpio. 

// Ahora en la aplicación tenemos el componente ListOfGifs al cuál le pasamos la prop keyword y esa keyword nos va a hacer una llamada a 
// la api con el valor que le pongamos. 

// Para que el componente ListOfGifs se renderice cada vez que cambie la prop que le pasemos, lo que hacemos
// es tener la keyword como estado y por defecto la misma va a ser 'panda'.

// Volvemos a crear el button que va a cambiar, en este caso, la keyword. 