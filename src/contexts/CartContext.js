import React, { createContext, useState, useEffect } from 'react';



export const CartContext = createContext();

const CartProvider = ({ children }) => {


  const [cart, setCart] = useState([]);

  const [itemsAmount, setItemsAmount] = useState(0);


  const [total, setTotal] = useState(0);


  useEffect(() => {
    const total = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.price * currentValue.amount;
    }, 0);
    setTotal(total);

  }, [cart])

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.amount;

      }, 0);
      setItemsAmount(amount);
    }
  }, [cart])

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    console.log(newItem);

    // Check if item is already in cart
    const itemIndex = cart.find((item) => item.id === id);

    if (itemIndex) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: itemIndex.amount + 1 }

        } else { return item }
      });
      setCart(newCart);

    } else {
      setCart([...cart, newItem]);
    }


  };

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart);
  }

  const clearCart = () => {
    setCart([]);
  }


  const increaseItem = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  }


  const decreaseItem = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount === 1) {
      removeFromCart(id);
    }

  }

  return (
    <CartContext.Provider value={{ cart, addToCart, itemsAmount, total, decreaseItem, removeFromCart, clearCart, increaseItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
