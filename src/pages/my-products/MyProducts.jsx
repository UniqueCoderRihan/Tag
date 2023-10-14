import { useContext, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContex } from "../../Provider/AuthProvider";
import MyProductCard from "./MyProductCard";
const validationSchema = Yup.object().shape({
    productName: Yup.string().required('Product Name is required'),
    prouctImages: Yup.string().url('Invalid image link').required('Image link is required'),
    price: Yup.number().typeError('Price must be a number').required('Price is required').positive('Price must be positive'),
    category: Yup.string().required('Product Category is required'),
    avaibleQuantity: Yup.number().typeError('Available Quantity must be a number').required('Available Quantity is required').positive('Available Quantity must be positive'),
    description: Yup.string().required('Description is required'),
});

const MyProducts = () => {
    const {user} = useContext(AuthContex)
    const [products, setProducts] = useState([]);
    const [searchText, setText] = useState('');
    const { register, handleSubmit, errors,reset } = useForm({
        resolver: yupResolver(validationSchema),
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    // handel Search functionalities
    const handleSearch = () => {
        fetch(`http://localhost:3000/searched/${searchText}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }
    const onSubmit = async (data) => {
        console.log(data);
        const product = {
            productName: data.productName,
            prouctImages: data.prouctImages,
            price: data.price,
            author: user.displayName,
            description: data.description,
            avaibleQuantity: data.avaibleQuantity,
            category: data.category,
            sellerEmail: user.email
        }
        // use realtime user info TODO::::
        // console.log(product);
        fetch('http://localhost:3000/addProduct', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'ThankYou!  Added!!',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                    
                    closeModal(true)
                    reset()
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Please Try Again Letter',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    const url = (`http://localhost:3000/my-product?email=${user?.email}`);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [url])
    return (
        <div>
            <div className="">
                <div className="flex space-x-2 my-2 justify-between">
                    <div className="space-x-2">
                        <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Search Product" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-secondary">Search</button>
                    </div>

                    <div className="flex justify-end ">
                        <button onClick={openModal} className="btn btn-warning">Add New Product</button>
                    </div>
                </div>
                <p className="text-3xl text-center mb-3">My Products</p>
            </div>
            {/* all product which i added on Database */}
            <div className="grid justify-center space-x-1 space-y-1 md:grid-cols-3">
                {
                    products.map(product=> <MyProductCard key={product._id} product={product}/>)
                }
            </div>




            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-start justify-center z-50 mt-5">
                    <div className="bg-base-300 p-5 rounded-lg shadow-lg">
                        <h2 className="text-xl border-b pb-2 font-semibold text-center">
                            Add New Product
                        </h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-[100%] mx-auto">
                                <label
                                    htmlFor="productName"
                                    className="block text-sm font-medium text-black"
                                >
                                    Product Name
                                </label>
                                <input
                                    className="mt-1 p-2 w-full text-black border rounded focus:outline-none focus:border-blue-300"
                                    type="text"
                                    required
                                    {...register('productName')}
                                />
                                {errors?.productName && (
                                    <p className="text-red-500">{errors.productName.message}</p>
                                )}
                            </div>
                            <div className="w-[100%] mx-auto mt-1">
                                <label
                                    htmlFor="prouctImages"
                                    className="block text-sm font-medium text-black"
                                >
                                    ProuctImages(share Image Link)
                                </label>
                                <input
                                    className="mt-1 p-2 w-full text-black border rounded focus:outline-none focus:border-blue-300"
                                    type="text"
                                    required
                                    {...register('prouctImages')}
                                />
                                {errors?.prouctImages && (
                                    <p className="text-red-500">{errors.prouctImages.message}</p>
                                )}
                            </div>

                            <div className="w-[100%] mx-auto mt-1">
                                <label
                                    htmlFor="price"
                                    className="block text-sm font-medium text-black"
                                >
                                    Price
                                </label>
                                <input
                                    className="mt-1 p-2 w-full text-black border rounded focus:outline-none focus:border-blue-300"
                                    type="number"
                                    required
                                    {...register('price')}
                                />
                                {errors?.price && (
                                    <p className="text-red-500">{errors.price.message}</p>
                                )}
                            </div>
                            <div className="w-[100%] mx-auto mt-1">
                                <label
                                    htmlFor="category"
                                    className="block text-sm font-medium text-black"
                                >
                                    Category
                                </label>
                                <select
                                    className="mt-1 p-2 w-full text-black border rounded focus:outline-none focus:border-blue-300"
                                    required
                                    {...register('category')}
                                >
                                    <option value="tshirt">T-Shirt</option>
                                    <option value="laptop">Laptop</option>
                                    <option value="tv">TV</option>
                                    <option value="fish">Fish</option>
                                </select>
                                {errors?.category && (
                                    <p className="text-red-500">{errors.category.message}</p>
                                )}
                            </div>

                            <div className="w-[100%] mx-auto my-1">
                                <label
                                    htmlFor="avaibleQuantity"
                                    className="block text-sm font-medium text-black"
                                >
                                    AvaibleQuantity
                                </label>
                                <input
                                    className="mt-1 p-2 w-full text-black border rounded focus:outline-none focus:border-blue-300"
                                    type="number"
                                    required
                                    {...register('avaibleQuantity')}

                                />{errors?.avaibleQuantity && (
                                    <p className="text-red-500">{errors.avaibleQuantity.message}</p>
                                )}
                            </div>
                            <div className="w-[100%] mx-auto my-1">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-black"
                                >
                                    Description
                                </label>
                                {/* <input
                                    className="mt-1 p-2 w-full text-black border rounded focus:outline-none focus:border-blue-300"
                                    type="textArea"
                                    required
                                    {...register('description')}
                                /> */}
                                <textarea required
                                    {...register('description')} id="description" name="description" rows="4" cols="50"></textarea>
                                {errors?.description && (
                                    <p className="text-red-500">{errors.description.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-warning  capitalize w-full rounded-md"
                            >
                                Add Product
                            </button>
                        </form>

                        <button
                            className="btn btn-success capitalize w-full mt-1 rounded-md"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyProducts;