import React from 'react'; 
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail'
import {Link, Route} from 'wouter';
import StaticContext from './context/StaticContext';
import {GifsContextProvider} from './context/GifContext';

// Al crear un contexto se crea un objeto que consta de dos partes, Context.Provider y Context.Consumer

// Cada objeto Context viene con un componente Provider de React que permite que los
// componentes que lo consumen se suscriban a los cambios del contexto.

// Normalmente el contexto ENGLOBA bastantes cosas de una aplicación. Vamos a hacer lo siguiente:

function App() {
  return (
    <StaticContext.Provider value={{name: 'merlina', programadora: true }}>
      <div className="App-content">
        <section>
          <Link to='/'>
            <img className='App-logo' alt='giffy logo' src='/logo.png'/>
          </Link> 

          <GifsContextProvider>
            < Route 
                path="/" 
                component={Home} 
            />
            < Route 
                path="/search/:keyword" 
                component={SearchResults} 
            />
            < Route 
                path="/gif/:id" 
                component={Detail} 
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>  
  )
}

// El Context.Provider es un componente que recibe un prop value que serán los valores a compartir.
// Todos los componentes renderizados dentro de este componente tendran acceso a los valores del contexto.

// El Provider de un contexto siempre debe envolver a modo de wrapper a los Consumers del contexto. 

// Ahora nos vamos a la page Detail en la cuál vamos a acceder a la información del objeto 

// Dato de color: Cuando usamos el método createContext en un Contexto, como StaticContext y le pasamos como valor inicial un objeto, el mismo que
// le pasamos a "value" acá, eso que le pasamos nos va a servir si intentamos consumir el objeto sin tener acceso al contexto.
// Podríamos comprobarlo sacando el <StaticContext.Provider /> 

//  Lo bueno del contexto es que nos da la posibilidad de hacer estados globales, algo parecido a lo que podemos conseguir con redux.


export default App; 