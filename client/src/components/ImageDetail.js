import React from "react";

const ImageDetail = (props) =>{

    console.log(props);

    return  <div className="w3-quarter">
                <img className="fa w3-margin w3-jumbo w3-center"
                    
                    src={props.src} style={{width:"60%",cursor:"pointer"}} onClick={props.onClick}/>    
                <p style={{color:"yellow"}}>
                    {props.points} points
                </p>
            </div>
           
};


export default ImageDetail;