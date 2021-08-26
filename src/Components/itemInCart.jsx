import React, { Component } from 'react';
import storeContext from '../Store/storeContext';
import './itemInCart.css';


class ItemInCart extends Component {
    static contextType = storeContext
    state = {}
    render() { 
        return ( 
            <div className="item-in-cart">
                <img className="product-img" src="fasd" alt="image coming soon" />
            <div className="item-info">
                <h6>{this.props.data.title}</h6>
            </div>
            <label>{this.props.data.price}</label>
            <label>{this.props.data.quantity}</label>
            <label>{this.getTotal()}</label>

            <div className="remove-item">
                <button onClick={this.handleDelete} type="button" className="btn btn-warning btn-sm">🗑️</button>
            </div>
            </div>
         );
    }

    handleDelete = () => {
        this.context.removeProductFromCart(this.props.data._id);
    }

    getTotal = () => {
        return(this.props.data.price * this.props.data.quantity).toFixed(2);
    };
}
 
export default ItemInCart;