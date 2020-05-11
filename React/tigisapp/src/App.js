import React from 'react';
import './App.css';
import Header from './components/Header';
import {Route,BrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import withContext from './components/Context';
import Checkout from './components/Checkout';
import ShopItem from './components/ShopItem'
import Footer from './components/Footer.js';
import CheckoutForm from './components/CheckoutForm';



export const ContextCheckoutForm= withContext(CheckoutForm);
const ContextHeader=withContext(Header);
const ContextShop=withContext(Shop);
const ContextCheckout=withContext(Checkout);
const ContextShopItem=withContext(ShopItem);



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <ContextHeader/>
      <Route  exact path='/' component={Home}/>
      <Route  exact path='/about' component={About}/>
      <Route exact path='/shop'  component={ContextShop}/>
      <Route exact path='/checkout' component={ContextCheckout}/>
      <Route exact path="/shopitem" component={ContextShopItem}/>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}


export default App;
