import React, { Component } from 'react'
import ItemService from '../Services/itemService';

class HistoryPurchase extends React.Component {
    state ={
        orders:[]
    }
    render() { 
        return <div className="history-page">
            <h2>These are you purchases from our store</h2>
            <hr />

            {this.state.orders.map(ord=> (
            <div key={ord._id}>{ord.total}</div>
            ))}
        </div>;
    }

    async componentDidMount() {
        let service = new ItemService();
        let ords = await service.getUserOrders(123)
        this.setState({orders: ords})
    }
}
 
export default HistoryPurchase;