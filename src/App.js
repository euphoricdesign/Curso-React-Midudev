import React from 'react'; 
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail'
import {Link, Route} from 'wouter';
import StaticContext from './context/StaticContext';
import {GifsContextProvider} from './context/GifContext';

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
export default App; 