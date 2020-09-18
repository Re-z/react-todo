import React from 'react';


export default ({name}) => {
	return (
		<li className="list-item">
			<span>{name}</span>
			<button>close</button>
		</li>
	)
}