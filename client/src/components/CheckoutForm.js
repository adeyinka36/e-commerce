import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';


class CheckoutForm extends Component{
    constructor(props){
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            street:"",
            city:"",
            postcode:"",
            formDeets:null,
            product:this.props.context.state.cart,
             
            showFormError:false,
            showForm:true,
            showCardButton:false,

        }
    }

setFormValues=(e)=>
this.setState({
    firstName:document.getElementsByName("firstName")[0].value,
    lastName:document.getElementsByName("lastName")[0].value,
    street:document.getElementsByName("street")[0].value,
    city:document.getElementsByName("city")[0].value,
    postcode:document.getElementsByName("postcode")[0].value,
})

sendFormDetails=async(e)=>{
    e.preventDefault()
    const formDeets={firstName:this.state.firstName,
                     lastName:this.state.lastName,
                     street:this.state.street,
                    city:this.state.city,
                    postcode:this.state.postcode}

    this.setState({formDeets})

    const error=await this.props.context.state.checkoutFormError
    
    if(!error){
      this.setState({showCardButton:true,showForm:false})
    }

    else{
        this.setState({showFormError:true})
    }
}

    render(){

      // here i extract data and send the form details to the back-end for processing
        const product=this.state.product
        const {firstName,lastName,street,city,postcode}=this.state

        const makePayment= (token)=>{
          const body={
            firstName,lastName,street,city,postcode,
            token,
          product}
          const headers={"Content-Type":"application/json"}
            console.log("fetching")
        
            return fetch(`http://localhost:5000/makepayment`,{
              method: 'POST',
              headers,
              body: JSON.stringify(body)
            })
            .then(res=>{if(res.status===200){
                
                return window.location = "http://localhost:3000/"
                
            }})
              
            .catch(err=>{
              
              alert("Payment Unsucessful")
              console.log(`error at  client ${err}`)})
          }
          
        
        
      
        return(
        
            <div className="stripe">
              {this.state.showForm? <form className="checkout_form_form">
                   {this.state.showFormError?<p>Please complete all fields</p>:null}
                   {/* <p>Checkout</p> */}
                
                    <div>
                        <input name="firstName" placeholder="First Name" onChange={this.setFormValues}></input><br></br>
                        <input name="lastName" placeholder="Last Name" onChange={this.setFormValues}></input>
                    </div>
                    <div>
                        <p>Shipping Details</p>
                        <input name="street" placeholder="Street and Number" onChange={this.setFormValues}></input><br></br>
                        <input name="city" placeholder="City" onChange={this.setFormValues}></input><br></br>
                        <input name="postcode" placeholder="PostCode" onChange={this.setFormValues}></input>
                    </div>
            
                    <button onClick={this.sendFormDetails}>Next</button>
               </form>:null}
            {this.state.showCardButton?<StripeCheckout
                 stripeKey="pk_test_XWkzaJCa8Dtw0GljqT4nWEoy00XHCoxlPq"
                 token={makePayment}
                 name="Make"/>:null}
          </div>
            
        )
    }
}


export default CheckoutForm