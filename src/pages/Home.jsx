import NizzleNav from "../components/Nav";
import Newsletter from "../components/NewsletterSub";
import Footer from "../components/Footer";

function Home(){
    return(
        <section className="bg-gray-100"> 
            <NizzleNav/>           
            <Newsletter/>
            <Footer/>
        </section>
    )
}

export default Home;