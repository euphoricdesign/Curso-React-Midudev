import React from 'react'; 
import Gif from '../Gif'
import './style.css'

const ListOfGifs = ({gifs}) => {
    return <div className="ListOfGifs">
    {
        gifs.map(({id, title, url}) => 
            <Gif 
                key={id} 
                id={id} 
                title={title} 
                url={url} 
            />
        )
    }
    </div>

}

export default ListOfGifs;