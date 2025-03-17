import React from "react";

const Location = ({
    address1,
    city,
    state,
    zip_code
}) =>{
    return <div>
        <h4>Location</h4>
        <h4>{address1}</h4>
        <h4>{city}, {state} {zip_code}</h4>
        
    </div>
}

export default Location;