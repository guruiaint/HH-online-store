import React, { Component } from 'react'
import storeContext from '../Store/storeContext';
import ItemInCart from './itemInCart';
import './cart.css'


class Cart extends Component {
    static contextType = storeContext
    state = {
        
     }
    render() { 
        return (
            <div className="cart-page">
                <h1>This is the cart</h1>
                <h4>You have {this.context.cart.length} products in your cart.</h4>
            <div className="d-flex">
                <div className="cart-container">
                    {this.context.cart.map((prod) => (
                    <ItemInCart key={prod._id} data={prod}></ItemInCart>
                    ))}
                </div>
                <div className="total-container">
                    <label>Subtotal:</label>
                    <h6>${this.getCartTotal()}</h6>

                    <button onClick={this.removeProductFromCart} className="btn btn-primary">Proceed to Checkout</button>
                </div>
                </div>
            </div> 
         );
    }
    getCartTotal = () => {
       let total = 0;
       for(let i=0; i< this.context.cart.length; i++){
           let item = this.context.cart[i];
           total += item.price * item.quantity;
       }
        return total.toFixed(2);
    }
}
 
export default Cart;