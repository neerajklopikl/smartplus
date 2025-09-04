import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // 1. Import Link
import './ProductListing.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { allProductsData } from './allProductsData';

const ProductListing = () => {
    const { categoryName } = useParams(); 
    const productData = allProductsData[categoryName] || [];

    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [sortOrder, setSortOrder] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(productData);

    useEffect(() => {
        const [minPrice, maxPrice] = priceRange;
        let products = productData.filter(product => product.price >= minPrice && product.price <= maxPrice);

        if (sortOrder === 'lth') products.sort((a, b) => a.price - b.price);
        else if (sortOrder === 'htl') products.sort((a, b) => b.price - a.price);
        else if (sortOrder === 'rating') products.sort((a, b) => b.rating - a.rating);
        else if (sortOrder === 'discount') {
            products.sort((a, b) => {
                const discountA = ((a.originalPrice - a.price) / a.originalPrice);
                const discountB = ((b.originalPrice - b.price) / b.originalPrice);
                return discountA - discountB;
            });
        }
        setFilteredProducts(products);
    }, [priceRange, sortOrder, categoryName, productData]);

    const pageTitle = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

    return (
        <div className="listing-page-container">
            <div className="filter-sidebar">
                <h3>Filters</h3>
                <div className="filter-section">
                    <h4>PRICE</h4>
                    <div className="price-slider-container">
                        <Slider range min={0} max={100000} defaultValue={priceRange} onAfterChange={setPriceRange} />
                        <div className="price-range-display"><span>₹{priceRange[0]}</span><span>to</span><span>₹{priceRange[1]}</span></div>
                    </div>
                </div>
                <div className="filter-section">
                    <div className={`sort-option ${sortOrder === 'lth' ? 'active' : ''}`} onClick={() => setSortOrder('lth')}>Price -- Low to High</div>
                    <div className={`sort-option ${sortOrder === 'htl' ? 'active' : ''}`} onClick={() => setSortOrder('htl')}>Price -- High to Low</div>
                    <div className={`sort-option ${sortOrder === 'rating' ? 'active' : ''}`} onClick={() => setSortOrder('rating')}>Rating -- High to Low</div>
                    <div className={`sort-option ${sortOrder === 'discount' ? 'active' : ''}`} onClick={() => setSortOrder('discount')}>Discount -- Low to High</div>
                </div>
            </div>

            <div className="product-grid-container">
                 <div className="product-grid-header">
                    <h2>{pageTitle}</h2>
                    <p>Showing {filteredProducts.length} of {productData.length} results</p>
                </div>
                <div className="product-grid">
                    {filteredProducts.map(product => (
                        // 2. Wrap card in a Link to the detailed product page
                        <Link to={`/product/${categoryName}/${product.id}`} className="product-listing-link" key={product.id}>
                            <div className="listing-product-card">
                                <img src={product.image} alt={product.name} className="listing-product-image" />
                                <p className="listing-product-name">{product.name}</p>
                                <div className="product-rating"><span className="rating-badge">{product.rating} ★</span><span className="reviews-count">({product.reviews.toLocaleString()})</span></div>
                                <div className="product-price-section"><span className="current-price">₹{product.price.toLocaleString()}</span><span className="original-price">₹{product.originalPrice.toLocaleString()}</span><span className="discount">{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% off</span></div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
