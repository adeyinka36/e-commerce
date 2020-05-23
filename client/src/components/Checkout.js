import React,{Component} from 'react';
import {ContextCheckoutForm} from '../App'
import prettygirl from '../image/blackgirl.jpg';



class Checkout extends Component{
  constructor(props){
    super(props);
    this.state={
      allfields:false,
      showform:false,
      product:{price:200,name:"Brazil hair"},
      proceed:false,
      cart:null
    }
  }

  // this function loads data from local storage 
componentDidMount=async()=>{
  let data= await localStorage.getItem('cart')
  data = JSON.parse(data)
  await this.setState({cart:data})
}

// this function decides of the checkout component gets mounted
CardPayment=async()=>{
  
 await this.setState({
    checkout:true
 })

 
 }



 showForm=()=>{
   this.setState({showform:true})
 }


 removeFromCart=(e)=>{
 
   const itemName= e.target.parentElement.nextElementSibling.innerText
   this.props.context.removeFromCart(itemName)


 }




render(){
 

// Here i extract the costs and cart data from  the  context
  let  items=this.props.context.state.cart
  let cart=items
  let arrayOfCosts=[]
         if(cart&&cart.length){
          arrayOfCosts=items.map(e=>Number(e.cost)*Number(e.quantity))
         }
    
  
 
  let  totalCost
  if(arrayOfCosts.length){
  totalCost=arrayOfCosts.reduce((accumulator,currentValue)=>{return Number(accumulator)+Number(currentValue)})}
  const product=this.state.product
  product.amount=totalCost

 
  
  

if(items&&items.length>0){
    return(
        
        <div className="checkout" >
            
            <div className="selected_items_list" >
              {items.map(item=>
                  <div key={item.uniqueId} className="selected_items_each" >
                  <div className="shopping_cancel_div">
                    <p onClick={this.removeFromCart} desc={item.uniqueId} key={item.uniqueId} className="shopping_cancel">Remove</p>
                    <img src={prettygirl} alt="girl "></img>
                  </div>
                    
                    <p className="check_p ">{item.name}</p>
                    <p className="check_p ">{`$${item.cost}`}</p>
                    <p className="check_p ">{`${item.quantity}`}</p>
      
                    {/* <p>{item.amount}</p> */}
                   
                  </div>
              )}
            </div>
            <div className="shopping_payment">
            
              <p className="total">{`Subtotal: $${arrayOfCosts.reduce((accumulator,currentValue)=>{return Number(accumulator)+Number(currentValue)})}`}</p>
               <ContextCheckoutForm />
               
                </div> 
               
            </div>

      
        
        
      

    )
              }
  else{
    return(
      <div className="empty_cart">YOUR CART IS EMPTY</div>
    )
  }
}

}


export default Checkout