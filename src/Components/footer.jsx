import React, { Component } from 'react'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer">
                <p>All copyrights ©️ reserved by Homestead Handiwork LLC 2021.
                </p>
            </div>
         );
    }
    
    test() {
        console.log("footer test");
    }
}
 
export default Footer;