import NizzleNav from "../components/Nav";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";

function Home(){
    return(
        <section className="bg-gray-100"> 
            <NizzleNav/>      
            <Hero/>     
            <Footer/>
        </section>
    )
}

export default Home;