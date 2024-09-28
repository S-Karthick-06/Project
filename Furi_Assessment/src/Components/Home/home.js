import Hero from "./hero";
import PopularProduct from "./popularProduct";
import Product from "./productSection";
import TestimonalHero from "./testimonalHero";
import WeHelpSection from "./weHelpSection";
import WhyChooseSection from "./whyChooseSection";

function Home(){
    return(
        <>
        <Hero/>
        <Product/>
        <WhyChooseSection/>
        <WeHelpSection/>
        <PopularProduct/>
        <TestimonalHero/>
        </>
    )
}

export default Home;