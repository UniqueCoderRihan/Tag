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
            <div className="">
                <div className="flex space-x-2 my-2 justify-between">
                    <div className="space-x-2">
                        <input type="text" placeholder="Search Product" className="input input-bordered" />
                        <button className="btn btn-secondary">Search</button>
                    </div>

                    <div className="flex justify-end space-x-2">
                        <button className="btn btn-primary">Low to high</button>
                        <button className="btn btn-warning">High to low</button>
                    </div>
                </div>

            </div>
            <div className="grid justify-center md:grid-cols-3 my-2 space-x-1 space-y-2 ">
                {
                    products.map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;