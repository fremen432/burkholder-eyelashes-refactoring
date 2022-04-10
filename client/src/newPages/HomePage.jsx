import Hero from '../newComponents/Hero'
import AboutUs from '../newComponents/AboutUs'
import ContactUs from '../newComponents/ContactUs'
import Products from '../newComponents/Products'

export default function HomePage() {
    return (
        <div className="PAGE__HomePage">
            <Hero/>
            <AboutUs/>
            <Products/>
            <ContactUs/>
        </div>
    )
}