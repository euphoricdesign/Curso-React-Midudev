import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

const useGifs = ( {keyword} = {keyword: null} ) => {
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true);

        // Recuperamos la keyword del localStorage.
        const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword')
        || 'random'; 

        getGifs({keyword: keywordToUse}) 
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword) // Guardamos la keyword en localStorage. Cada vez que hagamos una busqueda y obtengamos resultados, guardamos esa busqueda. 
            })
    }, [keyword])

    return {loading, gifs}
}

export default useGifs;

// Este sería nuestro primer custom hook. Lo que hacemos es copiar la lógica del componente SearchResults, importar la info que necesitamos.
// Ahora, ¿que es lo que queremos que devuelva este custom hooks? pues tanto loading como los gifs.

// Luego, en el SearchResults, qué es donde estamos utilizando toda esta esta lógica, vamos a importar el hook useGifs.


// Lo que vamos a querer es que al custom hook, al cuál le pasamos una keyword y necesitamos decirle cuál sería, tenga un valor por defecto:
// keyword: null.
