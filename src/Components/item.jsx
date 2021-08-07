import React, { Component } from 'react';
import QuantityPicker from './quantityPicker';

import "./item.css";

class Item extends Component {
    state = { 
        quantity: 1 
    }
    render() { 
        return ( 
            <div className="item">
                <img src={"/images/products/" + this.props.data.image} alt="images coming soon" />

                <h5>{this.props.data.title}</h5>

                <label> Total ${this.getTotal()}</label>
                <label> Price ${this.props.data.price.toFixed(2)}</label>

                <QuantityPicker onChange={this.handleQuantityChange}></QuantityPicker>

                <button className="btn btn-sm btn-info btn-add">
                    <i className="fa fa-cart-plus">🛒</i>
                </button>
            </div>
         );
         
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