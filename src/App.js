import React from 'react'; 
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter"; 


function App() {
  return (
    <div className="App-content">
      <section>
        <Link to='/gif/rosa'>Gifs Rosas</Link> 
        <Link to='/gif/azul'>Gifs Azules</Link>
        <Link to='/gif/verde'>Gifs Verde</Link>
        <br/>
        <Link to='/'>reiniciar</Link>
        
        < Route // Este componente le permite a App soportar url y renderizar un componente cuando esa url sea accedida.
            path="/gif/:keyword" // url soportada por App
            component={ListOfGifs} // Este componente recibe una prop llamada "params", que vendría a representar el parametro que se pasa por url.
        />
      </section>
    </div>
      
  )
}




export default App; 