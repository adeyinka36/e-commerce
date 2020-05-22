import React,{Component} from 'react'
import {Link} from 'react-router-dom'



class Home extends Component{
   
    
    

    render(){
        return(
         <div className="home_div">
    
            <div className="home_back_container"><div className="main_background_pic"><h1>Summer Sales</h1></div></div>
            <div className="services">
             <div className="wig_laying_container">
                 <div className="wig_laying_pic"></div>
                 <p>Perfect Wig Laying</p>
                 <p>$100</p>
             </div>
             <div className="eye_lashes_container">
                 <div className="eye_lashes_pic"></div>
                 <p>Luxurious  Eye_lashes</p>
                 <p>$50</p>
             
            </div>
        </div>
        <div className="service_pic2">
             <p className="browse"><Link to='/shop' className="browse_link">Browse the store</Link></p>
        </div>
         </div>
        )
    }
}


export default Home