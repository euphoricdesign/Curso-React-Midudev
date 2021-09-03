import React from 'react';
import {Link} from 'wouter';
import './Gif.css'

const Gif = ({title, id, url}) => {
    return (
        <div className="Gif">
            <Link to={`/gif/${id}`} className="Gif-link"> 
                <h4 className="title">{title}</h4>
                <img className="img-gif" src={url} alt={title} />
            </Link>
        </div>
    )
} 

export default Gif;