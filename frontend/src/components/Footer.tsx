import {assets} from "../assets/assets.ts";


const Footer = () => {
    return (
        <div>

            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} alt="logo" className='w-36 mb-5'/>
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type
                        and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div>
                    <p className='uppercase text-xl font-medium mb-5'>Company</p>
                    <ul className='space-y-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='uppercase text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='space-y-1 text-gray-600'>
                        <li>+1-000-000-0000</li>
                        <li>greatstackdev@gmail.com</li>
                        <li>Instagram</li>
                    </ul>
                </div>

            </div>
            <div>
                <hr/>
                <p className='py-5 text-sm text-center'>
                    Copyright 2024 &copy; forever.com - All Right Reserved
                </p>
            </div>
        </div>
    );
};

export default Footer;
