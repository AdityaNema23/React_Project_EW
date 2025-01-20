import { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    if (product) {
      const productId = product.id || `${product.title}-${product.price}`;

      setCart((prevCart) => {
        const existingProductIndex = prevCart.findIndex((item) => item.id === productId);
        if (existingProductIndex >= 0) {
          const updatedCart = [...prevCart];
          updatedCart[existingProductIndex].quantity += 1;
          return updatedCart;
        } else {
          const productWithId = { ...product, id: productId, quantity: 1 };
          return [...prevCart, productWithId];
        }
      });
    } else {
      console.error("Cannot add an invalid product:", product);
    }
  };

  // Remove product from cart by productId
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId, action) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === productId) {
          if (action === 'increase') {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === 'decrease' && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
