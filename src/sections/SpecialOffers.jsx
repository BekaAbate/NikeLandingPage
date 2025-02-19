import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
    return (
        <section className="flex justify-wrap xl:items-center items-start max-container flex-col gap-10 xl:flex-row-reverse">
            <div className="mb-5">
                <h2 className="text-4xl font-bold font-palanquin">
                    <span className="text-coral-red">Special</span> Offer
                </h2>
                <p className="mt-6 info-text lg:max-w-3xl">
                    Embark on a shopping journey that redefines your experience
                    with unbeatable deals. From premier selections to incredible
                    savings, we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-6 info-text lg:max-w-3xl">
                    Navigate a realm of possibilities designed to fulfill your
                    unique desires, surpassing the loftiest expectations. Your
                    journey with us is nothing short of exceptional.
                </p>
                <div className="mt-11 flex-wrap flex items-center gap-4">
                    <Button label="Shop now" iconURL={arrowRight} />
                    <Button
                        label="Learn more"
                        bgColor="bg-white"
                        textColor="text-slate-gray"
                    />
                </div>
            </div>
            <div className="flex-1">
                <img
                    src={offer}
                    alt="Shoe Promotion"
                    width={773}
                    height={687}
                    className="object-contain w-full"
                />
            </div>
        </section>
    );
};

export default SpecialOffers;
