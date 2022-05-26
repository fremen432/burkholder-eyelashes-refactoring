import Hero from "./Hero";
import AboutUs from "./About-Us";
import ContactUs from "./Contact-Us";
import FeaturedProducts from "./Featured-Products";

export default function PAGE_Home() {
	return (
		<div id="Home" className="PAGE__HomePage">
			<Hero />
			<AboutUs />
			<FeaturedProducts />
			<ContactUs />
		</div>
	);
}
