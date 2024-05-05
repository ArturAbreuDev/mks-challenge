'use client'

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

interface Product {
  id: number
  name: string
  price: number
  photo: string
  quantity: number
}

interface CartContextType {
  cart: Product[]
  addProduct: (product: Product) => void
  removeProduct: (id: number) => void
  calculateTotal: () => string
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  modalCart: boolean
  setModalCart: Dispatch<SetStateAction<boolean>>
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = sessionStorage.getItem('cart')
      return savedCart ? JSON.parse(savedCart) : []
    }
    return []
  })
  const [modalCart, setModalCart] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  const addProduct = (product: Product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id)

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart]
      updatedCart[existingProductIndex].quantity += 1
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeProduct = (id: number) => {
    const newCart = cart.filter((product) => product.id !== id)
    setCart(newCart)
  }

  const calculateTotal = () => {
    const total = cart.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity
    }, 0)
    return total.toFixed(2)
  }

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 }
      }
      return product
    })
    setCart(updatedCart)
  }

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 }
      }
      return product
    })
    setCart(updatedCart)
  }

  const context: CartContextType = {
    cart,
    addProduct,
    calculateTotal,
    increaseQuantity,
    modalCart,
    setModalCart,
    removeProduct,
    decreaseQuantity,
  }

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
