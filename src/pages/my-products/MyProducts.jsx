import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

const MyProducts = () => {
    const [products, setProducts] = useState([]);
    const [searchText, setText] = useState('');
    const { register, handleSubmit, setValue } = useForm({});
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
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product Added successfully',
            showConfirmButton: false,
            timer: 1500,
        });
        // const event = {
        //     title: data.title,
        //     banner: data.banner,
        //     relase: data.relase,
        // };
        // console.log(event);
        // try {
        //     const EventAdded = await addNewEvent(event);
        //     Swal.fire({
        //         position: 'top-end',
        //         icon: 'success',
        //         title: 'Event Added successfully',
        //         showConfirmButton: false,
        //         timer: 1500,
        //     });
        //     closeModal();
        // } catch (err) {
        //     console.log(err);
        // }
    };

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
                            </div>
                            <div className="w-[100%] mx-auto mt-1">
                                <label
                                    htmlFor="category"
                                    className="block text-sm font-medium text-black"
                                >
                                    Category
                                </label>
                                <input
                                    className="mt-1 p-2 w-full text-black border rounded focus:outline-none focus:border-blue-300"
                                    type="number"
                                    required
                                    {...register('category')}
                                />
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
                                />
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