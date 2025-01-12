import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SellerNavbar from "./SellerNavbar";
import SellerFooter from "./SellerFooter";
import SellerSideBar from "./SellerSideBar";

const ModifyProduct = ({ selectedProduct }) => {
    const [product, setProduct] = useState(selectedProduct || {});

    useEffect(() => {
        setProduct(selectedProduct);
    }, [selectedProduct]);

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100 w-full">
            <div className="bg-white shadow-md rounded-lg p-6 w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">MODIFY PRODUCT</h2>

                <form>
                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="col-span-1">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Select Product Category</label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={product.category || ''}
                                    onChange={(e) => setProduct({ ...product, category: e.target.value })}
                                >
                                    <option>Text</option>
                                    {/* Add more options here */}
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Product Title</label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={product.title || ''}
                                    onChange={(e) => setProduct({ ...product, title: e.target.value })}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Product Unit/MRP Rate</label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={product.unitRate || ''}
                                    onChange={(e) => setProduct({ ...product, unitRate: e.target.value })}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Total Unit To Be Stocked</label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={product.totalStock || ''}
                                    onChange={(e) => setProduct({ ...product, totalStock: e.target.value })}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Brand/Company Name</label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={product.brand || ''}
                                    onChange={(e) => setProduct({ ...product, brand: e.target.value })}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Maximum Discountable Price</label>
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    value={product.discountPrice || ''}
                                    onChange={(e) => setProduct({ ...product, discountPrice: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="col-span-1 flex flex-col justify-center">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Upload Product Image</label>
                            <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg flex flex-col items-center justify-center h-full">
                                <p className="text-gray-500 mb-2">Drag & drop files or <span className="text-blue-500">Browse</span></p>
                                <p className="text-gray-500 text-xs">Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                                <button className="mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg">UPLOAD FILES</button>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Product Description</label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="3"
                            placeholder="In details the description of the product."
                            maxLength="225"
                            value={product.description || ''}
                            onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        ></textarea>
                    </div>

                    <div className="flex justify-between">
                        <button type="button" className="bg-red-500 text-white py-2 px-4 rounded-lg">CANCEL</button>
                        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const SellerModifyProduct = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // WIll add from mysql :))))))))))))
    const [products, setProducts] = useState([
        { id: '1', title: 'Product 1', category: 'Category 1', unitRate: '100', totalStock: '50', brand: 'Brand 1', discountPrice: '90', description: 'Description 1' },
        { id: '2', title: 'Product 2', category: 'Category 2', unitRate: '200', totalStock: '30', brand: 'Brand 2', discountPrice: '180', description: 'Description 2' },
        // Add more products here
    ]);

    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSelectProduct = (productId) => {
        const product = products.find(p => p.id === productId);
        setSelectedProduct(product);
    };

    const location = useLocation();
    const locationState = location.state || {};
    const { sellerID: locationSellerId, name: locationName } = locationState;

    useEffect(() => {
        if (locationSellerId && locationName) {
            localStorage.setItem("sellerID", locationSellerId);
            localStorage.setItem("name", locationName);
        }
    }, [locationSellerId, locationName]);

    const sellerID = localStorage.getItem("sellerID") || "Unknown";
    const name = localStorage.getItem("name") || "Seller";

    console.log("SellerModifyProduct received:", { sellerID, name }); // Debugging line

    return (
        <>
            <SellerNavbar />
            <div className="flex">
                <SellerSideBar
                    isCollapsed={isCollapsed}
                    toggleCollapse={toggleCollapse}
                />
                <div className="flex-1 flex flex-col min-h-screen bg-gray-100 p-8">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Search Product by ID</label>
                        <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter Product ID"
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                        <button
                            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
                            onClick={() => handleSelectProduct(searchQuery)}
                        >
                            Search
                        </button>
                    </div>
                    {selectedProduct ? (
                        <ModifyProduct selectedProduct={selectedProduct} />
                    ) : (
                        <p className="text-gray-700">No product selected. Please search for a product by ID.</p>
                    )}
                </div>
            </div>
            <SellerFooter />
        </>
    );
};

export default SellerModifyProduct;