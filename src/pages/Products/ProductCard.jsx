import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { productName,description, prouctImages, _id, price, category } = product || {};
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img src={prouctImages} className='w-[50%] mx-auto rounded-lg' alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">
                    {productName}
                    <div className="badge badge-secondary">Price: {price}</div>
                </h2>
                <p>{description}</p>

                <div className="card-actions justify-end">
                    <div className="badge badge-outline btn-sm">{category}</div>
                    <div className="btn btn-sm"> <Link to={`/product/${_id}`}>See Details</Link> </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;