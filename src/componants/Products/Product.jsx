import React from 'react';
import "./Product.css"

const Product = (props) => {
     const {name,price,img,quantity,ratings,seller,stock } = props.product;
     const handleAddToCart = props.handleAddToCart;
 




     return (
          <div className='all-products'>
               <img src={img} alt="" />
          <div className='product-info'>
               <h3 className='product-name'> {name} </h3>
               <p className='product-price'>Price: ${price} </p>
               <small>Manufacturer : {seller}</small><br />
               <small>Rating : {ratings} Star </small>
          </div>
          <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart</button>
          </div>
     );
};

export default Product;