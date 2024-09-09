import {useContext, useEffect, useState} from "react";
import {ShopContext} from "../context/ShopContext.tsx";
import {assets} from "../assets/assets.ts";
import Title from "../components/Title.tsx";
import ProductItems from "../components/ProductItems.tsx";

type ProductProps = {
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

const Collection = () => {
    const {products} = useContext(ShopContext) || {};
    const [showFilter, setShowFilter] = useState(false)
    const [filterProduct, setFilterProduct] = useState<ProductProps | null>([])
    const [category, setCategory] = useState<string[]>([]);
    const [subCategory, setSubCategory] = useState<string[]>([]);


    const filterCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (category.includes(e.target.value)) {
            setCategory(category.filter((item) => item !== e.target.value));
        } else {
            setCategory([...category, e.target.value]);
        }
    }

    useEffect(() => {
        if (products) {
            setFilterProduct(products);
        }
    }, [products]);

    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            <div className='min-w-60'>
                <div className='uppercase flex items-center gap-3 my-2 text-xl'
                     onClick={() => setShowFilter(!showFilter)}>Filters
                    <img src={assets.dropdown_icon} alt="dropdwon-icon"
                         className={`sm:hidden h-3 transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}/>
                </div>
                <div
                    className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Categories</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <div className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={'Men'}/> Men
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={'Women'}/> Women
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={'Kids'}/> Kids
                        </div>
                    </div>
                </div>
                <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                    <p className='mb-3 text-sm font-medium'>Type</p>
                    <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                        <div className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={'Topwear'}/> Topwear
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={'Bottomwear'}/> Bottomwear
                        </div>
                        <div className='flex gap-2'>
                            <input type="checkbox" className='w-3' value={'Winterwear'}/> Winterwear
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-1'>
                <div className='flex justify-between text-base sm:text-2xl mb-4'>
                    <Title text1={'All'} text2={'Collections'}/>
                    <select className='border border-gray-300 text-sm px-2'>
                        <option value="relevant">sort by: Relevant</option>
                        <option value="low-high">sort by: low to high</option>
                        <option value="high-low">sort by: high to low</option>
                    </select>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {filterProduct &&
                        filterProduct.map((product) => (
                            <ProductItems key={product._id} id={product._id} name={product.name} price={product.price}
                                          image={product.image}/>
                        ))}
                </div>
            </div>
        </div>
    );
};


export default Collection;
