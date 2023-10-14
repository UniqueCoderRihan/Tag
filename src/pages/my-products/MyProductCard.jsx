import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";
const validationSchema = Yup.object().shape({
    productName: Yup.string().required('Product Name is required'),
    prouctImages: Yup.string().url('Invalid image link').required('Image link is required'),
    price: Yup.number().typeError('Price must be a number').required('Price is required').positive('Price must be positive'),
    category: Yup.string().required('Product Category is required'),
    avaibleQuantity: Yup.number().typeError('Available Quantity must be a number').required('Available Quantity is required').positive('Available Quantity must be positive'),
    description: Yup.string().required('Description is required'),
    
});

const MyProductCard = ({ product }) => {
    const {user} = useContext(AuthContex);
    const { productName, description, prouctImages, _id, price, category,availableQuantity} = product || {};
    const { register, handleSubmit, errors, reset } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            productName: productName || '', 
            prouctImages: prouctImages || '', 
            price: price || 0, 
            category: category || 'tshirt', 
            availableQuantity: availableQuantity || 10, 
            description: description || '',
        },
    });

    // handleUpdate
    const handleUpdateProduct =()=>{
        openModal();
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const onSubmit = async (data) => {
        console.log(data);
    
        const updatedProduct = {
            _id: _id,
            productName: data.productName,
            productImages: data.productImages,
            price: data.price,
            author: user.displayName,
            description: data.description,
            availableQuantity: data.availableQuantity,
            category: data.category,
            sellerEmail: user.email,
        };
    
        fetch('http://localhost:3000/updateProduct', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.acknowledged) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated!',
                    icon: 'success',
                    confirmButtonText: 'Done',
                });
    
                closeModal(true);
                reset();
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Please Try Again Later',
                    icon: 'error',
                    confirmButtonText: 'Cool',
                });
            }
        });
    };
    
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
                    <div className="btn btn-sm btn-success">Remove</div>
                    <div onClick={handleUpdateProduct} className="btn btn-sm btn-warning">Update Product</div>
                </div>
            </div>

            {/* this is Update Product Modal */}
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
                                <textarea 
                                    {...register('description')} id="description" name="description" rows="4" cols="50"></textarea>
                                {errors?.description && (
                                    <p className="text-red-500">{errors.description.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-warning  capitalize w-full rounded-md"
                            >
                                Update Product
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

export default MyProductCard;