import React from 'react';
import './Gif.css'

// Agregamos la clase "gif" al div que envuelve todo y le damos estilo en Gif.css

// Pero como queremos que cada imagen seda cliqueable vamos a cambiar las etiquetas <div> por <a>
// Y sacamos la etiqueta <small> con el id, que no es necesario que este a la vista

const Gif = ({title, id, url}) => {
    return (
        <a className="gif" href={`#${id}`}> 
            <h4>{title}</h4>
            <img src={url} alt={url} />
        </a>
    )
} 

export default Gif;


// Vamos a instalar un paquete, el de "wouter" que es una alternativa a React Router DOM o cualquier dependecia que se pueda utilizar 
// para hacer routers.

// El enrutamiento (router) es un mecanismo que reescribe las URL para simplificar su aspecto. Hacemos un npm install wouter.

// Vamos a App.js 
