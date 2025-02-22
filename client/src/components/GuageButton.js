import React from "react";

const GuageButton = (props) => {
// printing out props to the command line
  console.log(props);

     return  <div className={props.className}>
                <img className="fa w3-margin w3-jumbo w3-center"
                    
                    src={props.src} style={props.style} />    
              <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <div onClick={props.decrease}>
                  <img src={require("../assets/icons/minusSign.png")} style={{width:50,height:50,cursor:"pointer"}}/>
                </div>
                <p style={{color:"white"}}>The current {props.label} is {props.points}</p>
                <div onClick={props.increase}>
                  <img src={require("../assets/icons/plusSign.png")} style={{width:50,height:50,cursor:"pointer"}}/>
                </div>
               
                
              </div>
            </div>
  
};



export default GuageButton;
