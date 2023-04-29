import { useState } from "react"

export const AgregarCategoria = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({target}) =>{
        //console.log('Cambiando');
        setInputValue(target.value)
    }

    const onSubmit = (event) =>{
        //console.log(onNewCategory);
        //prevent ayuda a que se mantengan los datos del formulario
        event.preventDefault()
        //console.log(inputValue)

        //verificar que no se manden espacios vacios
        if(inputValue.trim().length <=1)return

        setInputValue('')
        onNewCategory(inputValue)

    }

    return(
        <>
            <form onSubmit={onSubmit} aria-label="form">
                <input type="text" placeholder="Buscador de gifs..." 
                    value={inputValue}
                    onChange = {onInputChange}
                />
            </form>
        </>
    )
}
