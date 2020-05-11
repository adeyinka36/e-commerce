import React,{Component} from 'react'
import {Link} from 'react-router-dom'



class Home extends Component{
    constructor(){
        super();
    
    }

    render(){
        return(
         <div className="home_div">
             <div className="main_background_pic"></div>
             <div className="service_pic2">
             <p className="browse"><Link to='/shop' className="browse_link">Browse the store</Link></p>
        </div>
         </div>
        )
    }
}


export default Home