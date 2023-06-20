import NizzleNav from "../components/Nav";
import Newsletter from "../components/NewsletterSub";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";

function Home(){
    return(
        <section className="bg-gray-100"> 
            <NizzleNav/>      
            <Hero/>     
            <Newsletter/>
            <Footer/>
        </section>
    )
}

export default Home;