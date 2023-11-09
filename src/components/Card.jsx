import { useState } from 'react'
import '../styles/card.css'

export const Card = ({image, title, description, price, handleAgregar, handleQuitar, handleAumentar, handleDisminuir}) => {

    const [added, setAdded] = useState(false)

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)
    }

    const clickQuitar = () => {
        handleQuitar()
        setAdded(false)
    }
    
    return (
        <div className="tarjeta">
            <img src={image} alt={title} className='tarjeta-imagen' />
            <div className="tarjeta-contenido">
                <h3 className='tarjeta-titulo'>{title}</h3>
                <p className="tarjeta-descripcion">{description}</p>
                <p className="tarjeta-precio">{price}</p>
                {
            added 
            ?
            <button onClick={clickQuitar}type='button' className='boton-quitar'>Quitar del Carrito</button>
            :    
            <button onClick={clickAgregar}type='button' className='boton-agregar'>Agregar al Carrito</button>
            }
            </div>

           
        </div>
    )
}