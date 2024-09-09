import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import BestSeller from "../components/BestSeller.tsx";
import OurPolicy from "../components/OurPolicy.tsx";
import NewsletterBox from "../components/NewsletterBox.tsx";

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Hero/>
            <LatestCollection/>
            <BestSeller/>
            <OurPolicy/>
            <NewsletterBox/>
        </div>
    );
};

export default Home;
