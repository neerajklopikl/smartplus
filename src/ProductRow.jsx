import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductRow.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const ProductRow = ({ title, data }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => { if (scrollContainerRef.current) { const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current; setShowLeftArrow(scrollLeft > 0); setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1); } };
  const scrollRight = () => { if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft += 300; };
  const scrollLeft = () => { if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft -= 300; };
  useEffect(() => { const container = scrollContainerRef.current; if (container) { container.addEventListener('scroll', handleScroll); handleScroll(); } return () => { if (container) container.removeEventListener('scroll', handleScroll); }; }, [data]);

  // Determine the link for the "View All" button based on the first item's category
  const viewAllLink = data.length > 0 ? `/products/${data[0].category}` : '/';

  return (
    <div className="product-row-container">
      <div className="product-row-header">
        <h2>{title}</h2>
        {/* Link the View All button to the category page */}
        <Link to={viewAllLink}>
          <button className="view-all-btn">View All</button>
        </Link>
      </div>
      <div className="scrolling-wrapper">
        {showLeftArrow && <button className="scroll-arrow left" onClick={scrollLeft}><BsChevronLeft /></button>}
        <div className="product-list" ref={scrollContainerRef}>
          {data.map((product, index) => (
            // Updated link to point to the product listing page
            <Link to={`/products/${product.category}`} className="product-link" key={index}>
              <div className="product-card">
                <img src={product.image} alt={product.title} className="product-image" />
                <p className="product-title">{product.title}</p>
                <p className="product-price">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        {showRightArrow && <button className="scroll-arrow right" onClick={scrollRight}><BsChevronRight /></button>}
      </div>
    </div>
  );
};

export default ProductRow;
