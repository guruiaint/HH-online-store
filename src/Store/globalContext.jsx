import React, { Component } from 'react'
import storeContext from './storeContext';

class GlobalState extends Component {
    state = { 
        cart: [],
     }
    render() { 
        return ( 
            <storeContext.Provider 
            value={{
                cart: this.state.cart,

                addProductToCart: this.addProductToCart,
                removeProductFromCart: this.removeProductFromCart,
            }}

            >
                {this.props.children}
            </storeContext.Provider>
         );
    }
    addProductToCart = (product) => {
        console.log("TODO: add product", product);
        let currentCart = [...this.state.cart];

        let found = false;
        for(let i=0; i<currentCart.length; i ++){
            let item = currentCart[i];

            if(item._id === product._id){
                console.log("found it");
                item.quantity += product.quantity;
                found = true;
            }
        }
        if (!found){
        currentCart.push(product);
        }
        
        this.setState({cart: currentCart});
        
    };
    
    removeProductFromCart = (productId) => {
        console.log("TODO: remove product");
        let deleteCart = [...this.state.cart];

        
        for(let i=0; i<deleteCart.length; i ++){
            let item = deleteCart[i];

            if(item._id === productId){
                console.log("delete it");
                deleteCart.splice(i,1);
                break;
            }
        }
        this.setState({cart: deleteCart});
    };

};


 
export default GlobalState;