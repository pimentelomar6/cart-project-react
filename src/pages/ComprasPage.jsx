import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductContext } from "../context/ProductContext"
import { CartContext } from "../context/CartContext"

export const ComprasPage = () => {

    const { products } = useContext( ProductContext )

    const {listaCompras, agregarCompra, disminuirCantidad, aumentarCantidad, eliminarCompra} = useContext( CartContext )
    
    const handleAgregar = (compra) => {
        agregarCompra(compra)
    }
    const handleQuitar = (id) => {
        eliminarCompra(id)
    }
    const handleAumentar = (id) => {

    }
    const handleDisminuir = (id) => {

    }
    return (
        <>
            <h1>Compras: </h1>
            <hr />

            {
                products.map(product => (
                    <Card
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        handleAgregar={() => handleAgregar(product)}
                        handleQuitar={() => handleQuitar(product.id)}
                    >
                    </Card>
                ))
            }

            
        </>
    )
}