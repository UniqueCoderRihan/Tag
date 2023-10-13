import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div>
            <div>

            </div>
            <div className="grid md:grid-cols-3 my-2 space-x-1 space-y-2 ">
                {
                    products.map(product=> <ProductCard key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default Products;