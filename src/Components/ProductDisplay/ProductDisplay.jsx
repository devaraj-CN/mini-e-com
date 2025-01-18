import React from 'react'
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <div className='product-display'>
            <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="product-display-img">
                    <img className='product-display-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="product-display-right">
                <h1>{product.name}</h1>
                <div className="product-display-star">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star_dull} alt="" />
                    <p>(144)</p>
                </div>
                <div className="product-display-prices">
                    <div className="product-display-price-old">₹{product.old_price}</div>
                    <div className="product-display-price-new">₹{product.new_price}</div>
                </div>
                <div className="product-display-description">
                    <p>{product.description}</p>
                </div>
            </div>

        </div>
    )
}

export default ProductDisplay