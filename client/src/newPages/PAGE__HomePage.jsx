import Hero from '../newComponents/Hero'
import AboutUs from '../newComponents/AboutUs'
import ContactUs from '../newComponents/ContactUs'
import FeaturedProducts from '../newComponents/COMP__FeaturedProducts'
import AllProducts from '../newComponents/COMP__AllProducts'

export default function HomePage(props) {
    const { page } = props;
    return (
        <div id="Home" className="PAGE__HomePage">
            <Hero/>
            <AboutUs/>
            <FeaturedProducts/>
            <ContactUs/>
        </div>
    )
}