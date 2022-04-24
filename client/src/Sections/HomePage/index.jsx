import Hero from '../Hero'
import AboutUs from '../About-Us'
import ContactUs from '../Contact-Us'
import FeaturedProducts from '../Featured-Products'

export default function HomePage(props) {
    const { page, setPageMethods } = props;
    return (
        <div id="Home" className="PAGE__HomePage">
            <Hero setPageMethods={setPageMethods} />
            <AboutUs />
            <FeaturedProducts />
            <ContactUs />
        </div>
    )
}