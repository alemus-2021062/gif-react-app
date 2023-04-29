import React, { useState } from 'react'
import { AgregarCategoria } from '../components/AgregarCategoria'
import { MostrarGifs } from '../components/MostrarGifs'
// import { useState } from 'react'

export const GifApp = () => {

    const [categorias, setCategorias] = useState(['Demon Slayer', 'Dragon ball z'])

    const agregarCategoria = (newCategory) => {
        if (categorias.includes(newCategory)) { return }
        setCategorias([newCategory, ...categorias])
    }

    return (
        <>
            <h1>GifApp</h1>
            <hr />
            <AgregarCategoria onNewCategory={(value) => agregarCategoria(value)} />

            {/* <input></input> */}
            {/* cards de los gif */}
            {/* <Item de cada card/> */}
            <ol>
                {
                    categorias.map(category => 
                        (
                            <MostrarGifs key={category} categorySend={category} />
                        )
                    )
                }
            </ol>
        </>
    )
}
