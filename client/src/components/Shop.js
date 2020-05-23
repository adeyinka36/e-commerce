import React,{Component} from 'react';


class Shop extends Component{
   constructor(props){
       super(props);
      this.state={
         searchInput:null,
         itemsInShop:null,
         searchResult:null,
         pic:null,
         brazil1:null,
         japan1:null,
         mexican1:null
      }
   }


componentDidMount=async()=>{


    const data=JSON.parse(localStorage.getItem("data"))
//    const items= await this.props.context.state.items  
   this.setState({itemsInShop:data})

//    load images
await import(`../image/brazil1.jpg`)
.then(pic=>{return this.setState({brazil1:pic.default})})
await  import(`../image/japan1.jpg`)
.then(pic=>{return this.setState({japan1:pic.default})})
await import(`../image/mexican1.jpg`)
.then(pic=>{return this.setState({mexican1:pic.default})})




}


seeItemDetails= async(e)=>{
    
    const obj={name:e.target.nextElementSibling.innerText,
        img:e.target.src,
        cost:e.target.nextElementSibling.nextElementSibling.innerText,
        description:e.target.parentElement.getAttribute("key")}
 
        console.log(obj.name);
        await this.props.context.updateCurrentItemName(obj.name.toLowerCase())
        let name=obj.name
        await localStorage.setItem("name",JSON.stringify(name))
    

return this.props.history.push({
    pathname: '/shopitem',
    state: obj
  })

}

addItemToCart=(e)=>{
    
    
    const obj={name:e.target.previousElementSibling.previousElementSibling.innerText,
               img:e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText,
               cost:Number(e.target.parentElement.getAttribute("cost")),
               description:e.target.parentElement.getAttribute("description"),
               id:e.target.parentElement.getAttribute("key"),
               quantity:e.target.parentElement.getAttribute("quantity")}
        

    console.log("working")
     this.props.context.addToCart(obj)
}


search=(e)=>{
    console.log("working")
    let items= this.state.itemsInShop
   let result=items.filter(item=>item.name.includes(e.target.value))
   this.setState({searchResult:result,searchInput:e.target.value})

}

render(){

    let items
    if(this.state.searchInput){items=this.state.searchResult}
    else{items=this.state.itemsInShop}

let showMainDiv=true;
if(items==null||!items.length){showMainDiv=false}

if(items){
    
return(
    <div>
     
      <div className="shop">
        <input className="shop_search"placeholder="Search Items...." onChange={this.search}></input>
       {showMainDiv?<div className="shop_items_container">
                {items.map(thing=><div  cost={thing.cost} quantity={thing.quantity} desc={thing.descripttion} key={thing.id} className="shop_items">
                     <img src={this.state[thing.name.toLowerCase()+"1"]} onClick={this.seeItemDetails} alt="the item"></img>
                     <p className="shop_name">{thing.name}</p>
                     <p>{`$${thing.cost}`}</p>
                     
                     <p onClick={this.addItemToCart} className="add_to_cart">Add to cart</p>
                     
                </div>)}
                  
               </div>:<p>No item found</p>}
   </div>
   </div>
    )
}
else{
    return(<div>Loading...</div>)
}
}

}



export default Shop