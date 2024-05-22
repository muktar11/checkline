import Header from "./headers";
import Navbar from "./Navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Section4 from "./section4"; 
import Footer from "./section5";
function HomePage() {
    return (
        <div>
            <Header />
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </div>
    );
}

export default HomePage;