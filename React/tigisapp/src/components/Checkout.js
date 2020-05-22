import React,{Component} from 'react';
import {MdCancel} from "react-icons/md";
import {ContextCheckoutForm} from '../App'
import prettygirl from '../image/blackgirl.jpg';
import randomId from 'react-id-generator';



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

componentDidMount=async()=>{
  let data= await localStorage.getItem('cart')
  data = JSON.parse(data)
  await this.setState({cart:data})
}


CardPayment=async()=>{
  console.log("yes")
 await this.setState({
    checkout:true
 })

 console.log(this.state.checkout)
 }


// componentDidMount=async()=>{
//   let items = await JSON.parse(localStorage.getItem('cart'))
//   this.setState({cart:items})
// }
 showForm=()=>{
   this.setState({showform:true})
 }

 removeFromCart=(e)=>{
   console.log(e.target.parentElement.nextElementSibling.innerText)
   const itemName= e.target.parentElement.nextElementSibling.innerText
 console.log(itemName)
   this.props.context.removeFromCart(itemName)


 }




render(){
  // const items = this.props.context.state.cart
  // console.log(items)
  let  items=this.props.context.state.cart
  let cart=items
  let arrayOfCosts=[]
         if(cart&&cart.length){
          arrayOfCosts=items.map(e=>Number(e.cost)*Number(e.quantity))
         }
    
  
    // arrayOfCosts=items.map(item=>Number(item.quantity))

  let  totalCost
  if(arrayOfCosts.length){
  totalCost=arrayOfCosts.reduce((accumulator,currentValue)=>{return Number(accumulator)+Number(currentValue)})}
  const product=this.state.product
  product.amount=totalCost

  // const makePayment= (token)=>{
    
  //   const body={
  //     totalCost,
  //     token,
  //   product}
  //   const headers={"Content-Type":"application/json"}
  //     console.log("fetching")
  
  //     return fetch(`http://localhost:5000/makepayment`,{
  //       method: 'POST',
  //       headers,
  //       body: JSON.stringify(body)
  //     })
  //     .then(response=>{if (response.status===200){console.log(response.status);return this.props.history.push('/')}
      
  //   })
    
  //     .catch(err=>console.log(`error at  client ${err}`))
  //   }
    
  
  

if(items&&items.length>0){
    return(
        
        <div className="checkout" >
            
            <div className="selected_items_list" >
              {items.map(item=>
                  <div key={item.uniqueId} className="selected_items_each" >
                  <div className="shopping_cancel_div">
                    <p onClick={this.removeFromCart} desc={item.uniqueId} key={item.uniqueId} className="shopping_cancel">Remove</p>
                    <img src={prettygirl}></img>
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