import React, {useState} from 'react';
import { Link, useLocation } from 'wouter'; // importamos useLocation
import useGifs from '../../hooks/useGifs'; // importamos nuestro hook
import ListOfGifs from '../../components/ListOfGifs';

// Lo que vamos a hacer ahora es crear un buscador para que la forma de acceder a los gifs no sea solo a través de popular_gifs.

const POPULAR_GIFS = ['Freddie Mercury', 'Lasagna', 'Weed', 'Programming'];

const Home = () => {
    const [ keyword, setKeyword ] = useState("");
    const [ path, pushLocation ] = useLocation();

    const { loading, gifs } = useGifs(); // Extraemos lo que devuelve el hook. 


    const handleSubmit = evt => { // El evento onsubmit ocurre cuando se envía un formulario.
        evt.preventDefault();
        // navegar a otra ruta
        console.log(keyword)
        pushLocation(`/search/${keyword}`);
    }

    const handleChange = evt => { // El evento change se dispara para elementos <input>, <select>, y <textarea> cuando una alteración al valor de un elemento es confirmada por el usuario
        setKeyword(evt.target.value); // En este caso, cuando el usuario empiece a escribir va a disparse el evento.
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here..." onChange={handleChange} type='text' value={keyword}/>
            </form>

            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs}/>


            <h3 className="App-title">Los gifs más populares</h3>
            <ul>
                {
                    POPULAR_GIFS.map((popularGif) => (
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>
                                Gifs de {popularGif}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Home;

// Para crear el buscador lo primero que hacemos es crear un useState, con el valor inicial (keyword='' : lo que vamos buscar)
// de un string vacío. 
// Creamos un form con un input type text, al form le agregamos el evento onSubmit, para que cuando suceda ejecute la función
// handleSubmit y al input el evento onChange para que cuando pase se ejecute el evento handleChange. 


// Lo que hacemos, luego de crear el buscador, es que, cuando ocurra el evento submit y sepamos la keyword naveguemos a una url 
// que sea localhost:3000/search/keyword (la keyword que hemos buscado).
// Para lograr eso vamos a utilizar un hook que tiene wouter que es "useLocation".

// useLocation devuelve un array de dos posiciones, la primera es el path en el que nos encontramos y la segunda es una función 
// que sirve, básicamente, para navegar de una forma programatica, para navegar sin utilizar un Link, ni nada de eso. 



// Hasta acá ya tenemos un buscador, lo que vamos a hacer ahora es crear nuestro primer Custom Hooks. Vamos a extraer la lógica del 
// componente search Results y la vamos a pasar a nuestor custom hook.

// Y vamos a reutilizar acá dicha lógica 

