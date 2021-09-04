import './App.css';
import NavBar from './Components/navBar';
import Footer from './Components/footer';
import Catalog from './Components/catalog';
import Home from './Components/home';
import About from './Components/about';
import Cart from './Components/cart';
import OrderPlaced from './Components/orderPlaced';
import HistoryPurchase from './Components/history';

import GlobalState from './Store/globalContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import {BrowserRouter, Route, Switch} from "react-router-dom";




function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">

          <NavBar></NavBar>

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/catalog" exact component={Catalog}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/orderPlaced" exact component={OrderPlaced}></Route>
          <Route path="/history" exact component={HistoryPurchase}></Route>
        </Switch>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;


/*
* javascript "this"
* arrow function 
*/