import { createContext } from 'react';
import { products } from '../assets/assets';

type ShopContextType = {
  products: {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string[];
    category: string;
    subCategory: string;
    sizes: string[];
    date: number;
    bestseller: boolean;
  }[];
  currency: string;
  delivery_fee: number;
};

export const ShopContext = createContext<ShopContextType | null>({
  products: [],
  currency: '',
  delivery_fee: 0,
});

const ShopContextProvider = ({ children }: { children: React.ReactNode }) => {
  const currency = '$';
  const delivery_fee = 10;

  const value = {
    products,
    currency,
    delivery_fee,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
