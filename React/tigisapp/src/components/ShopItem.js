import React,{Component} from 'react'
import Checkout from './Checkout';
import prettygirl from '../image/blackgirl.jpg';
// import prettygirl2 from '../image/slide1.jpg';
// import prettygirl3 from '../image/slide2.jpg';
// import prettygirl4 from '../image/slide3.jpg';
// import prettygirl5 from '../image/slide4.jpg';




class ShopItem extends Component{
     constructor(props){
     super(props);
      this.state={
          item:"",
          contexItems:"",
          picture:null,
          curentImage:0,
          pic1:null,
          pic2:null,
          firstImage:null,
          name:null
             
      }
     }

checkout=(e)=>{
    e.preventDefault()
    this.props.history.push('/checkout')
}

componentDidMount=async()=>{
    const name= await JSON.parse(localStorage.getItem("name")).toLowerCase()

    await import(`../image/${name}1.jpg`).then(pic=>this.setState({firstImage:pic.default}))
    const data= JSON.parse(localStorage.getItem("data"))
    this.setState({
        item:this.props.location.state,
        contexItems:data,
        currentItemName:name,
        
    })

    console.log(this.props.location.state.name)
    
}

store=()=>{
   return this.props.history.push('/shop')
}
// needs some work
addTocart=(e)=>{
 let multiples=e.target.previousElementSibling.value
this.props.context.addToCart(this.state.item,multiples)
}


slideImages=async(e)=>{
if(!this.state.pic1){
    const name= e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText.toLowerCase()
   await import(`../image/${name}1.jpg`)
    .then(pic=>{console.log(pic);return this.setState({pic1:pic.default})})
  await  import(`../image/${name}2.jpg`)
    .then(pic=>{return this.setState({pic2:pic.default})})
  
}
    
    const i=  this.state.curentImage
  const images=[this.state.pic1,this.state.pic2,this.state.pic3]
  let rnd
  console.log(this.state.curentImage)
  if(i<1){
      console.log("if")
       this.setState({curentImage:i+1})
   this.setState({picture:images[this.state.curentImage]})}
else{
    console.log("else")
   this.setState({curentImage:0})
  this.setState({picture:images[this.state.curentImage]})
}
}

render(){

    
  
    const items = this.state.contexItems
    

     if (items){

   
        const currentItem=items.filter(item=>item.name===this.state.item.name)
    

    return(

        <div className="shopitem_container">
           <div className="shoppingitem_image_div">
               <img src={this.state.picture||this.state.firstImage}></img>
           </div>
           <div className="shoppingcheckout_div">
           <button onClick={this.store} className="back_to_store">Back to Store</button>
                <p>{currentItem[0].name}</p>
                <p>{currentItem[0].description}</p>
                <p>{currentItem.length+" in stock"}</p>
            
                
                
                <button onClick={this.slideImages}>Next Image</button>
        
                <div className="shoppingcart_inputs">
                    <input defaultValue={1}></input>
                    <button onClick={this.addTocart}>Add to cart</button>
                    
                    
                </div>
              
                <button onClick={this.checkout} className="shopitem_checkout">Go to checkout</button>
           </div>
                  
           

        </div>
    )
     }
     else{
         return (<div>Loading...</div>)
     }



 }
}

export default ShopItem
