import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { AuthContex } from "../../Provider/AuthProvider";

const Products = () => {
    const {loading} = useContext(AuthContex)
    const [products, setProducts] = useState([]);
    const [searchText,setText] = useState('');
    // handel Search functionalities
    const handleSearch=()=>{
        fetch(`http://localhost:3000/searched/${searchText}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }
    // handle High to low shorting
    const handleHighToLow = () => {
        console.log("High to Low Btn clicked");
        fetch('http://localhost:3000/products/sort/high-to-low')
            .then(res => res.json())
            .then(data => setProducts(data))
    }

    // handle Low to High Shorting
    const handleLowToHigh = () => {
        console.log("Low to high ");
        fetch('http://localhost:3000/products/sort/low-to-high')
            .then(res => res.json())
            .then(data => setProducts(data))
    }
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    if (loading) {
        return <span className="loading loading-bars loading-md"></span>
    }
    return (
        <div>
            <div className="">
                <div className="flex space-x-2 my-2 justify-between">
                    <div className="space-x-2">
                        <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="Search Product" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-secondary">Search</button>
                    </div>

                    <div className="flex justify-end space-x-2">
                        <button onClick={handleLowToHigh} className="btn btn-primary">Low to high</button>
                        <button onClick={handleHighToLow} className="btn btn-warning">High to low</button>
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