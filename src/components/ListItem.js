import React from 'react';


export default ({deleteItem, name}) => {
	return (
		<li className="list-item">
			<span>{name}</span>
			<button onClick={deleteItem}>close</button>
		</li>
	)
}