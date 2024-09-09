import {useContext, useEffect, useState} from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItems from "./ProductItems.tsx";

type Product = {
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

const LatestCollection = () => {
  const { products } = useContext(ShopContext) || {};
  const [latestProduct, setLatestProduct] = useState<Product | null>([]);

  useEffect(() => {
    if (products) {
      setLatestProduct(products.slice(0, 10));
    }
  }, [products]);


  return (
    <section className="my-10">
      <div className="text-center py-8 sm:text-3xl text-2xl ">
        <Title text1="Latest" text2="Collections" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-2">
            {latestProduct &&
            latestProduct.map((product) => (
                <ProductItems
                key={product._id}
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
                />
            ))}
        </div>
    </section>
  );
};

export default LatestCollection;
