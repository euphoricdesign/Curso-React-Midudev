import React from 'react';
import Gif from '../../components/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs';

const Detail = ({ params }) => {
    const gifs = useGlobalGifs()
    
    const gif = gifs.find(element => 
        element.id === params.id
    )

    console.log(gif)

    return <Gif {...gif} />
}


export default Detail

// useContext Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor de contexto actual.
// El valor actual del contexto es determinado por la propiedad value del <MyContext.Provider> 
