import { useState, useEffect } from "react";
import getGifs from "../services/getGifs";

const useGifs = ( {keyword} = {keyword: null} ) => {
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true);

        const keywordToUse = keyword ? keyword : localStorage.getItem('lastKeyword')
        || 'random'; 

        getGifs({keyword: keywordToUse}) 
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword', keyword) 
            })
    }, [keyword])

    return {loading, gifs}
}

export default useGifs;
