// Se puede tener tantos contextos como necesitemos. Vamos a ver el ejemplo de dos contextos funcionando en la app.

import React, {useState} from 'react';

const Context = React.createContext({});

// export default Context;



// De esta manera Contex devolvería tanto el Consumidor como el Provider, pero lo que podemos hacer es crear nuestro propio provider:

// De esta forma: 
// export const GifsContextProvider = Context.Provider;

// O de esta forma que vamos a utilizar ahora:

export const GifsContextProvider = ({children}) =>{ // Lo que le llega por las props es lo que va a envolver
    const [gifs, setGifs] = useState([]) 

    return <Context.Provider value={{gifs,setGifs}}>
        {children}
    </Context.Provider>
} 

export default Context;