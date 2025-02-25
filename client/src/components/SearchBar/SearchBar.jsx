
import React from 'react';
import "./styles.css"

const SearchBar = () => {
  return (

    <>

<div class="search">
				<form class="search-form">
					<input type="text" placeholder="Search for books, authors, categories and more.."/>
					<input type="submit" value="Submit" onClick={()=>{alert("pressed")}}/>
				</form>
			</div>
</>


  );
}

export default SearchBar;
