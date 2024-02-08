import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  total: 0,
  totalQuantity: 0,
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { item, quantity }]);
      setTotalQuantity((prev) => prev + quantity);
      setTotal((prev) => prev + item.price * quantity);
    } else {
      const updatedCart = cart.map((prod) =>
        prod.item.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(updatedCart);
      setTotalQuantity((prev) => prev + quantity);
      setTotal((prev) => prev + item.price * quantity);
    }
  };

  const deleteItem = (itemId) => {
    const itemDelete = cart.find((prod) => prod.item.id === itemId);
    if (itemDelete) {
      const cartUpdated = cart.filter((prod) => prod.item.id !== itemId);
      setCart(cartUpdated);
      setTotalQuantity((prev) => prev - itemDelete.quantity);
      setTotal((prev) => prev - itemDelete.item.price * itemDelete.quantity);
    }
  };

  const removeCart = () => {
    setCart([]);
    setTotalQuantity(0);
    setTotal(0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.item.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, totalQuantity, addItem, deleteItem, removeCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
