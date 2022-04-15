import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import FeaturedProducts from '../components/COMP__FeaturedProducts'
import AllProducts from '../components/COMP__AllProducts'

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