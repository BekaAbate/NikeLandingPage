import {
    Hero,
    CustomerReviews,
    Footer,
    PopularProducts,
    Services,
    SpecialOffers,
    Subscribe,
    SuperQuality,
} from "./sections/index.js";
import Nav from "./components/Nav.jsx";
export default function App() {
    return (
        <main className="relative">
            <Nav />
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding">
                <PopularProducts />
            </section>
            <section className="padding">
                <SuperQuality />
            </section>
            <section className="padding-x py-10">
                <Services />
            </section>
            <section className="padding">
                <SpecialOffers />
            </section>
            <section className="padding bg-pale-blue">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
                <Subscribe />
            </section>
            <section className="padding-x padding-t pb-8 bg-black">
                <Footer />
            </section>
        </main>
    );
}
