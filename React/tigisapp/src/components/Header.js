import React,{Component} from 'react';
import {FaShoppingCart} from "react-icons/fa";
import {FaStream} from "react-icons/fa";
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
         
         let  cartItems=this.props.context.state.cart.length
    return(
        <div className="header">
        {this.state.shouldModalRender?<MenuModal  cancel={this.renderModal}/>:null}
           <div>
                <FaStream onClick={this.renderModal} className="header_menu_button"/>
            </div>
            <div className="logo_div">
                <p className="logo"><Link to='/'>QUESSENCE</Link></p>
            </div>
            <Link to='/checkout'> <div className="header_cart_div">
                <FaShoppingCart className="header_cart"/>
                <p className="header_cart_items">{cartItems>0?cartItems:null}</p>
                
            </div></Link>
        </div>
    )
}
}

export default Header