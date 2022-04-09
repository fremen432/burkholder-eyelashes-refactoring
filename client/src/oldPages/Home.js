import Hero from '../components/Hero';
import ProductsComp from '../components/ProductsComp';

export default function Home() {
    return (
        <>
            <Hero />
            <ProductsComp page={'home'} />        
        </>
    )
}