import React,{Component } from 'react';
import prettygirl from '../image/blackgirl.jpg';
import randomId from 'react-id-generator';
 


const mycontext= React.createContext();



export class MyProvider extends Component{
    constructor(props){
        super(props);
     this.state={
        items:[],

        stock:200,
        cart:[{name:"Brazillian weave",
                img:prettygirl,
                cost:50,
                stock:20,
                description:"Popular weave from brazil3",
                uniqueId:randomId()}],
        checkoutFormError:null,
        formDetails:null,
        currentItemName:null
        
     }
    }
  

addToCart=async (obj,amount=1)=>{
    let itemsForBasket=[]
    for(let i=0;i<amount;i++){
        obj.uniqueId=randomId()
      itemsForBasket.push(obj)
    }
   await this.setState({
    cart:[...this.state.cart,...itemsForBasket]
   })

   console.log(this.state.cart)
}

componentDidMount(){
    
// fillin up the state with details of products from the database
 return fetch(`http://localhost:5000/getproducts`)
 .then(res=>{
     if(res.status==200){return res.json() }
     else{return console.log( `there was an error retrieving initial data form database`)}
     
 })
 .then(res=>{
     console.log(res);
     const data=JSON.stringify(res)
     localStorage.setItem("data",data)
     this.setState({items:[...res]})})
     
}
componentWillUnmount(){
    localStorage.clear()
}

updateCurrentItemName=async(name)=>{
   await this.setState({currentItemName:name})
   console.log(this.state.currentItemName)
}

removeFromCart=async(unique)=>{
    console.log(unique)
  const updateCart=  this.state.cart.filter(item=>item.uniqueId !==unique )
  await this.setState({
      cart:updateCart
  })

  console.log (this.state.cart)
}


addCheckoutFormError=()=>{
    this.setState({checkoutFormError:true})
}

removeCheckoutFormError=()=>{
    this.setState({checkoutFormError:false})
}

addFormDetails=async (obj)=>{
    console.log(obj)
   this.setState({formDetails:obj})

    if(!obj.firstName||!obj.lastName||!obj.street||!obj.city||!obj.postcode){
       console.log("strange")
         this.setState({checkoutFormError:true})
   }
   else{
       console.log("i ran")
        this.setState({formDetails:obj,checkoutFormError:null})
   }

   console.log(this.state.checkoutFormError)
}




    render(){
          const value={state:this.state,
                       updateCurrentItemName:this.updateCurrentItemName,
                       addToCart:this.addToCart,
                       removeFromCart:this.removeFromCart,
                    addCheckoutFormError:this.addCheckoutFormError,
                    removeCheckoutFormError:this.removeCheckoutFormError,
                    addFormDetails:this.addFormDetails,
                    removeFromCart:this.removeFromCart}

                       
                       
                       
     

        return(
            <mycontext.Provider value={value}>
            {this.props.children}
            </mycontext.Provider>
        )
    }
}


export default function withContext (Component){
    return (props)=>{
        return(
            <mycontext.Consumer>
                {context=><Component {...props} context={context}/>}
            </mycontext.Consumer>
            
        )
    }
}