import React, { Component } from 'react'
import ItemService from '../Services/itemService';

class Admin extends Component {
    state = { 
        title = "",
        category = "",
        addInputs = "",

        showAlert: false,
     }
    render() { 
     return ( 
         <div className="admin-page">
             <h1>lets fill it all in later</h1>

             {this.state.showAlert ? <div className="alert alert-success">Item Saved</div> : null}

             <div className="my-control">
                 <label>Register New Item</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange }>do this line for all my-control's</input>
            </div>
            
            <div className="my-control">
                 <label>Register New Item</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange }>do this line for all my-control's</input>
            </div>

            <div className="my-control">
                 <label>Register New Item</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange }>do this line for all my-control's</input>
            </div>

            <div className="my-control">
                 <label>Register New Item</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange }>do this line for all my-control's</input>
            </div>

            <div className="my-control">
                 <label>Register New Item</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange }>do this line for all my-control's</input>
            </div>

            <div className="my-control">
                 <label>Register New Item</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange }>do this line for all my-control's</input>
            </div>

            <div className="my-control">
                 <label>Register New Item</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange }>do this line for all my-control's</input>
            </div>

            <div className="my-control">
                 <label>Register New Item</label>
                <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange }>do this line for all my-control's</input>
            </div>

            <div className="my-control">
                <button onClick={this.handleSave} className="btn btn-dark">Register Item</button>
            </div>
         </div>
      );
    }
}

handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
}

handleSave = () => {
    
    let item = {...this.state};// hard copy // deep copy // deep clone
    console.log(item);

    let service = new ItemService();
    service.saveItem(item);

    this.setState({ title: "", showAlert: true});// mirror the inputs state up top

    setTimeout(() => {this.setState({showAlert: false})}, 3500);
}
 
export default Admin;