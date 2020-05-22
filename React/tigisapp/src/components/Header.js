import React,{Component} from 'react';
import {FaShoppingCart} from "react-icons/fa";
import {FaStream} from "react-icons/fa";
import {FiShoppingCart} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import MenuModal from './MenuModal';



class Header extends Component{
     constructor(props){
         super(props);
         this.state={
             shouldModalRender:false
         }
     }

renderModal=()=>{
    let stripe=document.getElementsByClassName("shopping_payment")[0]

        if(this.state.shouldModalRender===true ){
          if(stripe) { stripe.style.display="block"}
      this.setState({shouldModalRender:false})
        }
        else{
            if(stripe) { stripe.style.display="none"}
            this.setState({shouldModalRender:true})
        }
   }
     
   
   
render(){
         
         let  cart=this.props.context.state.cart
         let arrayOfCosts=[]
         if(cart&&cart.length){
          arrayOfCosts=cart.map(item=>Number(item.quantity))
         }
         
         let cartItems
         if(arrayOfCosts.length){
          cartItems=arrayOfCosts.reduce((cur,acc)=>cur+acc)
         }
         else{cartItems=0}

    return(
        <div className="header">
        {this.state.shouldModalRender?<MenuModal  cancel={this.renderModal}/>:null}
           <div className="header_menu_icon">
                <FaStream onClick={this.renderModal} className="header_menu_button"/>
            </div>
            <div className="logo_div">
                <p className="logo"><Link to='/'>QUESSENCE</Link></p>
            </div>
            <Link to='/checkout'> <div className="header_cart_div">
                <FiShoppingCart className="header_cart"/>
                <p className="header_cart_items">{cartItems>0?cartItems:null}</p>
                
            </div></Link>
        </div>
    )
}
}

export default Header