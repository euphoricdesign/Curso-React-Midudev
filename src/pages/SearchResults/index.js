import React from 'react';
import Spinner from '../../components/Spinner';
import ListOfGifs from '../../components/ListOfGifs';
import useGifs from '../../hooks/useGifs';

const SearchResults = ({params}) => {
    console.log(params)
    const {keyword} = params;

    const { loading, gifs } = useGifs({keyword}); 
    
    return <>
        {loading
        ? < Spinner />
        : <ListOfGifs gifs={gifs} />
        }
    </>
}

export default SearchResults;