import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData();
    console.log(product);
    return (
        <div>
            this is details page {product.productName}
        </div>
    );
};

export default ProductDetails;