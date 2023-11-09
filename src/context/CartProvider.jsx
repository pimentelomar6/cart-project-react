import { useReducer } from "react"
import { CartContext } from "./CartContext"

const initialState = []

export const CartProvider = ({ children }) => {
   const comprasReducer = (state = initialState, action = {}) => {
      switch (action.type) {
         case '[CART] Agregar Compra':
            return [...state, action.payload]
        
         case '[CART] Aumentar Cantidad':
            return state.map(item => {
               const cant = item.cantidad + 1
               if (item.id === action.payload) return {...item, cantidad: cant}
               return item
            })
        
         case '[CART] Disminuir Cantidad':
            return state.map(item => {
               const cant = item.cantidad - 1
               if (item.id === action.payload && item.cantidad > 1) return {...item, cantidad: cant}
               return item
            })
         case '[CART] Eliminar Compra':
            return state.filter(compra => compra.id !== action.payload )
        
      
         default:
            return state
            
      }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
      compra.cantidad = 1
       const action = {
        type: '[CART] Agregar Compra',
        payload: compra
       }
       dispatch(action)
    }
    const aumentarCantidad = (id) => {
       const action = {
        type: '[CART] Aumentar Cantidad',
        payload: id
       }        
       dispatch(action)
    }
    const disminuirCantidad = (id) => {
       const action = {
        type: '[CART] Disminuir Cantidad',
        payload: id
       }
       dispatch(action)
    }
    const eliminarCompra = (id) => {
       const action = {
        type: '[CART] Eliminar Compra',
        payload: id
       }
       dispatch(action)
    }


    

    return (
        <CartContext.Provider value={{listaCompras, agregarCompra, disminuirCantidad, aumentarCantidad, eliminarCompra}}>
            {children}
        </CartContext.Provider>
    )
}