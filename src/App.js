import React from 'react'; 
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter"; // Importamos Route.  Route sirve para decir, de una forma declarativa, que rutas tiene nuestra app.

// Volvemos a sacar el button y también el useState que utilizamos en el ejemplo anterior. Ahora lo que vamos a hacer primero
// es darle un poco de estilos a esto. Creamos en el fichero components un archivo Gif.css y nos vamos a Gif.js.

function App() {
  return (
    <div className="App-content">
      <section>
        <Link to='/gif/rosa'>Gifs Rosas</Link> 
        <Link to='/gif/azul'>Gifs Azules</Link>
        <Link to='/gif/verde'>Gifs Verde</Link>
        < Route 
            component={ListOfGifs}
            path="/gif/:keyword" 
        />
      </section>
    </div>
      
  )
}

// Lo que hacemos acá es decir que cuando entremos en una ruta que tenga un path que sea "/gif/:keyword" (o sea tengamos un keyword en esa url)
// entonces el componente que vamos a renderizar va a ser ListOfGifs.

// Si vemos en el navegador, en este momento estamos paramos en http://localhost:3000/#EPcvhM28ER9XW
// Esta ruta no va a renderizar nada porque le dijimos que la ruta en donde tiene que renderizar es /gif/:keyword

// Luego de "gif/" tendríamos el parametro. Con el ":keyword" hacemos que el parametro sea dinamico 

// Lo que tendríamos que hacer es cambiar por http://localhost:3000/gif/panda

// De esta forma esto nos funcionaría, pero si nos vamos a la raíz de nuestro proyecto dejaría de funcionar.
// Una de las cosas que podemos hacer para solucionar esto es importar el componente "Link" que nos proporciona wouter 
// para hacer enlaces que funcinen por el history.push (inserta una nueva entrada en la pila del historial. Útil para redirigir
// a los usuarios a la página), es decir, que lo que haga es utilizar el history del navegador sin refrescar la página.

// Actualizará el enlace, el router de wouter hará match y cambiará el componente que tiene que renderizar.

// Entonces retornamos varios componentes Link y en lugar de tener un "href" van a tener un "to".



export default App; 