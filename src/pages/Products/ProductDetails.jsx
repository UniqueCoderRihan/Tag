import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData();
    const { productName, description, avaibleQuantity,author,prouctImages, _id, price, category } = product || {};

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={prouctImages} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{productName}</h1>
                    <p className="py-6">{description}</p>
                    <p>✨ High Quality</p>
                    <p>✨ Affordable Pricing</p>
                    <p>✨ Innovative Design</p>
                    <p>✨ Excellent Customer Support</p>
                    
                    <p className="font-bold">Available Quantity: {avaibleQuantity}</p>
                    <button className="btn btn-primary mt-5">Buy Now </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;