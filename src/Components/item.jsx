import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import "./item.css";
import storeContext from '../Store/storeContext';

class Item extends Component {
    static contextType = storeContext;
    state = { 
        quantity: 1 
    }
    render() { 
        return ( 
            <div className="item">
                <img src={"/#products/" + this.props.data.image} alt="images coming soon" />

                <h5>{this.props.data.title}</h5>

                <label> Total ${this.getTotal()}</label>
                <label> Price ${parseFloat(this.props.data.price.toFixed(2))}</label>

                <QuantityPicker onChange={this.handleQuantityChange}></QuantityPicker>

                <button onClick={this.handleAddToCart} className="btn btn-sm btn-outline-danger btn-add">
                    <i className="fa fa-cart-plus">🛒</i>
                </button>
            </div>
         );
         
    }

    handleAddToCart = () => {
        let prod = {
            ...this.props.data,
            quantity: this.state.quantity,
        }

        console.log(this.props.data);
        this.context.addProductToCart(prod);
    }

    getTotal=()=> {
        let total = this.state.quantity * this.props.data.price;
        return total.toFixed(2);
    }

    handleQuantityChange=(quantity)=>{
        this.setState({quantity: quantity})
        console.log("quantity change", quantity);
    };
}
 
export default Item;