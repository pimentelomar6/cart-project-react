import { ProductContext } from "./ProductContext"
import { useEffect, useState } from "react"

export const ProductsProvider = ({ children }) => {
    const [products, setProducts ] = useState([])

    const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }


    useEffect(()=> {
        fetchProducts()
    }, [])


    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}