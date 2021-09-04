import React, {useContext} from 'react';
// import StaticContext from '../../context/StaticContext'
import GifsContext from '../../context/GifContext'

// Para poder acceder a la información del objeto que pasamos a createContext usamos el hook llamado useContext
// y le decimos cuál es el contexto que queremos consumir.

// useContext Acepta un objeto de contexto (el valor devuelto de React.createContext) y devuelve el valor de contexto actual.
// El valor actual del contexto es determinado por la propiedad value del <MyContext.Provider> 


const Detail = ({ params }) => {
    // const staticCongif = useContext(StaticContext)
    // console.log(staticCongif)

    const {gifs} = useContext(GifsContext)
    console.log(gifs)
    //console.log(params.id)
    return <h1>GIF con id {params.id}</h1>
}

export default Detail

// De la misma manera que hicicimos con el primer contexto que creamos hacemos con el segundo.