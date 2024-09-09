import {useContext, useEffect, useState} from "react";
import {ShopContext} from "../context/ShopContext.tsx";
import Title from "./Title.tsx";
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

const BestSeller = () => {
    const {products} = useContext(ShopContext) || {};
    const [bestSellerProduct, setBestSellerProduct] = useState<Product | null>([]);

    useEffect(() => {
        if (products) {
            setBestSellerProduct(products.filter((product) => product.bestseller).slice(0, 5));
        }
    }, [products]);

    return (
        <section className="my-10">
            <div className="text-center py-8 sm:text-3xl text-2xl ">
                <Title text1="Best" text2="Seller"/>
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the.
                </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-2">
                {bestSellerProduct &&
                    bestSellerProduct.map((product) => (
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

export default BestSeller;