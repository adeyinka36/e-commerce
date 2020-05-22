import React from 'react';
import {useSpring, animated} from 'react-spring'
import { NavLink } from 'react-router-dom';


const MenuModal=(props)=>{

    return(
        <div className="menu_container">
        <div className="modal_inner_container" onMouseLeave={props.cancel}>
        
            
            <div className="menu_items">
                <p className="menu_button" onClick={props.cancel}>X</p>
                <NavLink to="/"><p>Home</p></NavLink>
                <NavLink to="/about"><p>About</p></NavLink>
                <NavLink to="/shop"><p>Shop</p></NavLink>
                <NavLink to="/faq"><p>FAQ</p></NavLink>
            </div>
        </div>
        </div>

    )
}

export default MenuModal