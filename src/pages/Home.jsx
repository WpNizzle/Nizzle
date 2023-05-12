// import Nav from '../components/Nav'
import MarketPlace from "../Sections/MarketPlaceProduct";
import Newsletter from "../components/NewsletterSub";
import Footer from "../components/Footer";
import FreeProduct from "../Sections/FreeProducts";
import FeaturedProducts from "../Sections/Featured";
import BestSellers from "../Sections/BestSellers";
import RecentlyAdded from "../Sections/RecentlyAdded";
import Trending from "../Sections/Trending";
import HeroSection from "../Sections/HomeSection";

function Home(){
    return(
        <section className="bg-gray-100">
            <HeroSection/>
            <FreeProduct/>
            <FeaturedProducts/> 
            <BestSellers/>    
            <RecentlyAdded/>  
            <Trending/>     
            <MarketPlace/>
            <Newsletter/>
            <Footer/>
        </section>
    )
}

export default Home;