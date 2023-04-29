import React from 'react'
import { useFetchGifs } from '../src/hooks/useFetchGifs'
import { MostrarItemGif } from './mostrarItemGif'

export const MostrarGifs = ({categorySend}) => {
    
    const { imagenes } = useFetchGifs(categorySend)

    return (
        <>
            <h2>{categorySend}</h2>
            <div className='card-grid'>
                {
                    imagenes.map((img) =>(
                        <MostrarItemGif key= {img.id}
                                        title = {img.title}
                                        {...img}/>
                    ))
                }
            </div>
        </>
    )
}
