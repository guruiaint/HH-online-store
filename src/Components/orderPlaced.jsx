import React, { Component } from 'react'

class OrderPlaced extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="order-placed pd-30">
                <h1 className="pt-50">Thank you!  Your order has been placed.</h1>
                <h3 className="pt-30">You will receive an email confrmation soon.  Have a great day!</h3>

                
            </div>
         );
    }
}
 
export default OrderPlaced;