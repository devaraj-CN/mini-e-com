import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart}=useContext(ShopContext);
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
                <div className="product-display-size">
                    <h1>Select Size</h1>
                    <div className="product-display-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
                <p className="product-display-category">
                    <span>Category :</span>Cloths,Fashion
                </p>
                <p className="product-display-category">
                    <span>Tags :</span>Modern,WEstren
                </p>
            </div>

        </div>
    )
}

export default ProductDisplay