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


    const handleSubmit = evt => { 
        evt.preventDefault();
        // navegar a otra ruta
        console.log(keyword)
        pushLocation(`/search/${keyword}`);
    }

    const handleChange = evt => { 
        setKeyword(evt.target.value); 
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