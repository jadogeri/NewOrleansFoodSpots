
import React from 'react';
import "./styles.css"

const SearchBar = ({
	value,
	onChange,
	onClick
}) => {

  return (

    <>

<div className="search">
				<div className="search-form">
					<input type="text" placeholder="e.g beans"  value={value}  onChange={onChange}/>
					<input type="submit" value="Submit" onClick={onClick}/>
				</div>
			
			</div>
</>


  );
}

export default SearchBar;



