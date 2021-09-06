// Hook solo de lectura.

import { useContext } from "react";
import GifsContext from '../context/GifContext'

const useGlobalGifs = () => {
    const {gifs} = useContext(GifsContext);
    return gifs
}

export default useGlobalGifs;