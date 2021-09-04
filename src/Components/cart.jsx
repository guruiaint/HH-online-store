import React, { Component } from 'react'
import storeContext from '../Store/storeContext';
import ItemInCart from './itemInCart';
import './cart.css'
import ItemService from './../Services/itemService';


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

                    <button onClick={this.handleSubmitOrder} className="btn btn-primary">Proceed to Checkout</button>
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
    };
}

export default Cart;

{/*handleSubmitOrder = async() => {
    let order = {
        userId: 123,
        couponCode: this.state.couponCode,
        products: this.context.cart
    };

    let service = new ItemService();
    let res = await service.submitOrder(order);
    if(res){
    console.log("resonse data: " , res);
    this.props.history.push("/orderPlaced");
    } else {

    }
}*/}

{/*handleInputChange = (event) => {
    //this.setState({ [event.target.name]: event.target.data })
}*/}
 
//export default Cart;