// import Nav from '../components/Nav'
import MarketPlace from "../Sections/MarketPlaceProduct";
import Newsletter from "../components/NewsletterSub";
import Footer from "../components/Footer";
import FreeProduct from "../Sections/FreeProducts";
import FeaturedProducts from "../Sections/Featured";
import BestSellers from "../Sections/BestSellers";
import RecentlyAdded from "../Sections/RecentlyAdded";
import Trending from "../Sections/Trending";

function Home(){
    return(
        <section>
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