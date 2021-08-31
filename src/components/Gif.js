import React from 'react';

const Gif = ({title, id, url}) => {
    return (
        <div>
            <h4>{title}</h4>
            <small>{id}</small>
            <img src={url} alt={url} />
        </div>
    )
} 

export default Gif;