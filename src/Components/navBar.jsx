//imrc
import React, { Component } from 'react';
import "./navbar.css";
//cc
class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="navbar">
                Navbar will be here!
            </div>
         );
    }

    test() {
        console.log("this is a test");
    }
}
 
export default NavBar;