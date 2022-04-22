import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import FeaturedProducts from '../components/COMP__FeaturedProducts'

export default function HomePage() {
    return (
        <div id="Home" className="PAGE__HomePage">
            <Hero />
            <AboutUs />
            <FeaturedProducts />
            <ContactUs />
        </div>
    )
}