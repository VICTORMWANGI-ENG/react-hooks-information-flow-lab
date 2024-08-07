/** @format */

// src/components/Filter.js
import React from "react";

function Filter({ onCategoryChange }) {
	return (
		<div className='Filter'>
			<select name='filter' onChange={onCategoryChange}>
				<option value='All'>All</option>
				<option value='Dairy'>Dairy</option>
				<option value='Produce'>Produce</option>
				<option value='Dessert'>Dessert</option>
			</select>
		</div>
	);
}

export default Filter;
