import React from 'react';
import './searchBox.css';

function SearchBox(props) {
	return (
		<div>
			<h1 className="f1">Robots</h1>
			<input
				onChange={props.onSearch}
				className="pa3 ba b--green bg-light-blue"
				type="search"
				name="search"
				placeholder="Search Robots"
			/>
		</div>
	);
}

export default SearchBox;
