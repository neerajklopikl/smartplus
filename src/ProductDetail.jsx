import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { allProductsData } from './allProductsData';
import { useCart } from './CartContext';
import './ProductDetail.css';
import { IoAdd, IoRemove } from "react-icons/io5";
import { FaTag } from "react-icons/fa";

const ProductDetail = () => {
    const { categoryName, productId } = useParams();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    // Find the product from the correct category array
    const product = allProductsData[categoryName]?.find(p => p.id === parseInt(productId));

    // A fallback for multiple images - we'll just repeat the main image for now
    const productImages = product ? [product.image, product.image, product.image, product.image] : [];
    const [mainImage, setMainImage] = useState(product?.image);

    if (!product) {
        return <div>Product not found!</div>;
    }

    const handleAddToCart = () => {
        addToCart(product, quantity);
        alert(`${quantity} x ${product.name} added to cart!`);
    };
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <div className="product-detail-container">
            <div className="product-image-section">
                <div className="thumbnails">
                    {productImages.map((img, index) => (
                        <div key={index} className="thumbnail-item" onMouseEnter={() => setMainImage(img)}>
                            <img src={img} alt={`Thumbnail ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div className="main-image-container">
                    <img src={mainImage} alt={product.name} className="main-product-image" />
                    <div className="action-buttons">
                         <div className="quantity-selector">
                            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}><IoRemove /></button>
                            <span>{quantity}</span>
                            <button onClick={() => setQuantity(q => q + 1)}><IoAdd /></button>
                        </div>
                        <button className="btn-add-to-cart" onClick={handleAddToCart}>ADD TO CART</button>
                        <button className="btn-buy-now">BUY NOW</button>
                    </div>
                </div>
            </div>

            <div className="product-info-section">
                <div className="breadcrumbs">
                    Home &gt; Electronics &gt; {categoryName} &gt; {product.name.substring(0, 20)}...
                </div>
                <h1 className="product-detail-name">{product.name}</h1>
                 <div className="product-rating-detail">
                    <span className="rating-badge-detail">{product.rating} ★</span>
                    <span className="reviews-count-detail">{product.reviews.toLocaleString()} Ratings &amp; Reviews</span>
                </div>
                <div className="price-section-detail">
                    <span className="current-price-detail">₹{product.price.toLocaleString()}</span>
                    <span className="original-price-detail">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="discount-detail">{discount}% off</span>
                </div>

                <div className="available-offers">
                    <h4>Available offers</h4>
                    <p><FaTag /> <strong>Bank Offer</strong> 5% cashback on Smartplus HDFC Bank Card. <a href="#">T&C</a></p>
                    <p><FaTag /> <strong>Bank Offer</strong> Flat ₹100 Instant Cashback on Paytm UPI. Min Order Value ₹500. <a href="#">T&C</a></p>
                    <p><FaTag /> <strong>Special Price</strong> Get extra {discount-2}% off (price inclusive of cashback/coupon). <a href="#">T&C</a></p>
                </div>

                <div className="details-row">
                    <div className="detail-item">
                        <span className="detail-label">Warranty</span>
                        <span className="detail-value">7 Days Replacement Warranty</span>
                    </div>
                     <div className="detail-item">
                        <span className="detail-label">Delivery</span>
                        <div className="pincode-checker">
                            <input type="text" placeholder="Enter Delivery Pincode" />
                            <button>Check</button>
                        </div>
                    </div>
                </div>

                 <div className="highlights-section">
                    <span className="detail-label">Highlights</span>
                    <ul>
                        <li>Reusable Goods</li>
                        <li>Durable Quality</li>
                        <li>Discounted Price</li>
                        <li>Extended Warranty</li>
                    </ul>
                </div>
                
                 <div className="seller-info">
                    <span className="detail-label">Seller</span>
                    <div>
                        <span className="seller-name">DealsShop</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;