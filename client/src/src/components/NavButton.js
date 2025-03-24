import React from "react";
import"./NavButton.css"

const NavButton = (props) =>{

    console.log(props);

    return  <div className="vertical-center w3-jumbo w-center"
    
        
        style={props.style} onClick={props.onClick} >
            {props.title}
 
</div>

           
};


export default NavButton;