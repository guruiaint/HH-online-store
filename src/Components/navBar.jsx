//imrc
import React, { Component } from 'react';
import "./navbar.css";
import storeContext from '../Store/storeContext';
import {Link} from 'react-router-dom';

//cc
class NavBar extends Component {
    static contextType = storeContext
    state = {  }
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Homestead Handiwork</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
        
                        <Link className="nav-link" to="/catalog">Catalog</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </div>
                </div>
  
                    <form className="d-flex">
                        
                        <Link className=" btn btn-outline-light" to="/cart">
                            <i className="fa fa-cart-plus mr-1"></i>
                            View Cart &nbsp;&nbsp;&nbsp;
                            <span className="badge bg-secondary ml-1">{this.context.cart.length}</span>
                        </Link>
                    </form>
                    </div>
            </nav>
         );
    }

    test() {
        console.log("this is a test");
    }
}
 
export default NavBar;