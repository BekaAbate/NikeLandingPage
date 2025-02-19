import { shoe8 } from "../assets/images";
import Button from "../components/Button.jsx";
const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="max-container flex justify-between items-center max-lg:flex-col w-full"
        >
            <div className="flex flex-1 flex-col ">
                <h2 className="text-4xl font-bold font-palanquin sm:max-w-lg">
                    We Provide You{" "}
                    <span className="text-coral-red">Super Quality</span> Shoes
                </h2>
                <p className="lg:max-w-lg max-w-2xl mt-6 font-montserrat text-slate-gray">
                    Ensuring premium comfort and style, our meticulously crafted
                    footwear is designed to elevate your experience, providing
                    you with unmatched quality, innovation, and a touch of
                    elegance.
                </p>
                <p className="lg:max-w-lg mt-6 font-montserrat text-slate-gray mb-11">
                    Our dedication to detail and excellence ensures your
                    satisfaction.
                </p>
                <div>
                    <Button label="View details" />
                </div>
            </div>
            <div className="flex flex-1 intems-center justify-center max-lg:hidden">
                <img
                    src={shoe8}
                    alt="product detail"
                    height={522}
                    width={570}
                    className="object-contain"
                />
            </div>
        </section>
    );
};

export default SuperQuality;
