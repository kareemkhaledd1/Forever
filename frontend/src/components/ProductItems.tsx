import {useContext} from "react";
import {ShopContext} from "../context/ShopContext.tsx";
import {Link} from "react-router-dom";

type Product = {
    id: string;
    name: string;
    price: number;
    image: string[];
};


const ProductItems = ({id, image, name, price}: Product) => {

    const {currency} = useContext(ShopContext) || {};

    return (
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out'/>
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    );
};

export default ProductItems;