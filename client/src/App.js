import React from 'react';
import './App.css';
import Header from './components/Header';
import {Route,BrowserRouter,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import withContext from './components/Context';
import Checkout from './components/Checkout';
import ShopItem from './components/ShopItem'
import Footer from './components/Footer.js';
import CheckoutForm from './components/CheckoutForm';
import FAQ from './components/FAQ';
import Notfound from './components/Notfound';



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
      <Switch>
      <Route  exact path='/' component={Home}/>
      <Route  exact path='/about' component={About}/>
      <Route exact path='/shop'  component={ContextShop}/>
      <Route exact path='/checkout' component={ContextCheckout}/>
      <Route exact path="/shopitem" component={ContextShopItem}/>
      <Route exact path='/faq' component={FAQ}/>
      <Route  component={Notfound}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}


export default App;
