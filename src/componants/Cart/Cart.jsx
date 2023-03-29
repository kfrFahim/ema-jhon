import React from 'react';
import "./Cart.css"

const Cart = ({cart}) => {

     let total = 0;
     let shipping = 0;
     for (const product of cart){
          total= total + product.price
          shipping= shipping + product.shipping
     }
     let tax = total*7/100;
     let grandtotal = total + shipping + tax;

     return (
          <div className='cart'>
                     <h2>Order Summary</h2>
                     <h5>Selected Items: {cart.length}</h5>
                     <p>Total Price: ${total}</p>
                     <p>Total Shipping Charge: ${shipping} </p>
                     <p>Tax: ${tax.toFixed(2)} </p>
                     <h4>Grand Total: ${grandtotal.toFixed(2)}</h4>
          </div>
     );
};

export default Cart;