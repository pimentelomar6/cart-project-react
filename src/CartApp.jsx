import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { CarritoPage } from "./pages/CarritoPage"
import { ComprasPage } from "./pages/ComprasPage"
import { ProductsProvider } from "./context/ProductsProvider"
import { CartProvider } from "./context/CartProvider"

export const CartApp = () => {
    return (
        <ProductsProvider>
         <CartProvider>
         <NavBar/>
         
            <div className="container">
            <Routes>
            <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
            <Route path="/cart" element={<CarritoPage></CarritoPage>}></Route>
            <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
            </Routes>
            </div>
           
            </CartProvider>
            </ProductsProvider>
       
        
       
    )
}