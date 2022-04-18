// @flow
import React, { useContext, createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { productsUrl } from "../App";

export interface CartItemType {
  id: number;
  image: string;
  category: string;
  description: string;
  price: number;
  title: string;
  amount: number;
}

type ContextPropType = {
  product: CartItemType[];
  setProduct: React.Dispatch<CartItemType[]>;
  cartItem: CartItemType[];
  setCartItem: React.Dispatch<CartItemType[]>;
  handleAddItem: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
  getTotalItems: (items: CartItemType[]) => number;
};

// creating context
export const ProductsProps = createContext<ContextPropType>(
  {} as ContextPropType
);

export const context = createContext<ContextPropType>({} as ContextPropType);

const ContextProvider: React.FC = ({ children }) => {
  const [product, setProduct] = useState([] as CartItemType[]);
  const [cartItem, setCartItem] = useState([] as CartItemType[]);

  const handleAddItem = (clickedItem: CartItemType): void => {
    setCartItem((prev: any[]) => {
      const isItemInCart = prev.find(
        (item: { id: number }) => item.id === clickedItem.id
      );

      if (isItemInCart) {
        return prev.map((item: { id: number; amount: number }) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number): void => {
    setCartItem((prev: CartItemType[]): CartItemType[] =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[])
    );
  };

  const getTotalItems = (items: CartItemType[]): number =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const getProducts = async (): Promise<void> => {
    const response = await axios.get(productsUrl);
    setProduct(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <context.Provider
      value={{
        product,
        setProduct,
        cartItem,
        setCartItem,
        handleAddItem,
        handleRemoveFromCart,
        getTotalItems,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const UseContext = () => useContext(context);

export default ContextProvider;
