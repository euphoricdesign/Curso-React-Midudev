// Utilizando la api context de React vamos a poder compartir info entre diferentes componentes. 
// Nos va a permitir definir información global a nivel de aplicación. 

// Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React
// Context se usa principalmente cuando algunos datos tienen que ser accesibles por muchos componentes en diferentes niveles de anidamiento. 


import React from 'react';

const Context = React.createContext({
    name: 'merlina',
    programadora: true 
})

export default Context;


// React.createContext: Crea un objeto Context. 

//  React.createContext recibe como argumento el valor predeterminado del contexto.

// Ahora vamos a ir a App.


