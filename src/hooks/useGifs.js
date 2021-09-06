import { useContext, useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifContext';

const useGifs = ( {keyword} = {keyword: null} ) => {
    const [loading, setLoading] = useState(false);


    const {gifs, setGifs} = useContext(GifsContext);
    // const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true);

        const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword')
        || 'random'; 

        getGifs({keyword: keywordToUse}) 
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword) 
            })
    }, [keyword, setGifs]) 

    return {loading, gifs}
}

export default useGifs;


// Hasta el momento lo que haciamos era utilizar el setGifs para actualizar el estado LOCAL de este custom hook, lo que podríamos hacer,
// es que en lugar de actualizar el estado local, lo que actualice sea el estado GLOBAL.

// Lo bueno de los hooks es que dentro de un hook puedes utilizar otro hook 