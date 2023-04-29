import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

//Los hooks son funciones que retornan algo y son propias de react
//En este caso es un hook personalizado

export const useFetchGifs = (categoria) => {

    const [imagenes, setImagenes] = useState([])

    const getImagenes = async() =>{
        const nuevasImagenes = await getGifs(categoria)
        setImagenes(nuevasImagenes)

    }   
    //useEfect : Ejecutar efectos secundarios al momento de
    //detectar una accion en especifico

    useEffect(() => {
      getImagenes();
    }, [])
    

    return {
        imagenes
    }

}
