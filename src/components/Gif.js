import React from 'react';
import './Gif.css'

const Gif = ({title, id, url}) => {
    return (
        <a className="gif" href={`#${id}`}> 
            <h4>{title}</h4>
            <img src={url} alt={url} />
        </a>
    )
} 

export default Gif;