import { createContext, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (product) {
    
      const productWithId = product.id ? product : { ...product, id: uuidv4() };
      setCart((prevCart) => [...prevCart, productWithId]);
    } else {
      console.error("Cannot add an invalid product:", product);
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  return useContext(CartContext);
};
