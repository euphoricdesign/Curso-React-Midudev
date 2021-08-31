import React, {useEffect,useState} from 'react'; 
import Gif from './Gif'
import getGifs from '../services/getGifs';

const ListOfGifs = ({keyword}) => {
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        getGifs({keyword}).then(gifs => setGifs(gifs)) 
    }, [keyword])


    return gifs.map(({id, title, url}) => 
        <Gif key={id} id={id} title={title} url={url} />
    ) 

}

export default ListOfGifs;

// A ListOfGifs en lugar de pasarle por props los {gifs}, como eso ahora es un estado (estado inicial) lo que vamos a decirle es la keyword que 
// queremos utilizar a la hora de buscar.

// A listOfGifs le llega la prop, tiene un estado inicial que es un array vacío y hacemos un effect, de forma que la primera vez que se
// renderice hacemos una llamada a la api con esa keyword que le pasamos por parametro. 

// Esta keyword es una DEPENDENCIA del efecto. Lo que queremos es que este componente, cada vez que se cambie la prop que le llega 
// se vuelva a renderizar. 
