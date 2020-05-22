import React from 'react';
import {Link} from 'react-router-dom'


const Notfound =()=>{


    return(
        <div className="errpage">
          <h1>404 </h1>
          <h2>Sorry Page Not Found</h2>
          <p><Link to='/'>Here to return to the home page</Link> </p>
          
           
        </div>
    )
}


export default Notfound