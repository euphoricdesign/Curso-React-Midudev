import React, {useState} from 'react';

const Context = React.createContext({});

export const GifsContextProvider = ({children}) =>{ // Lo que le llega por las props es lo que va a envolver
    const [gifs, setGifs] = useState([]) 

    return <Context.Provider value={{gifs,setGifs}}>
        {children} 
    </Context.Provider>
} 

export default Context;

// Al crear un estado en el contexto, el estado se convierte en global.