import React from 'react';
import Spinner from '../../components/Spinner';
import ListOfGifs from '../../components/ListOfGifs';
import useGifs from '../../hooks/useGifs';

// La lógica que teníamos hasta el momento acá quedará comentada, ahora la vamos a recuperar de nuestro custom hook. 


const SearchResults = ({params}) => {
    const {keyword} = params;

    const { loading, gifs } = useGifs({keyword}); // Extraemos lo que devuelve el hook. 
    
    return <>
        {loading
        ? < Spinner />
        : <ListOfGifs gifs={gifs} />
        }
    </>
}

export default SearchResults;