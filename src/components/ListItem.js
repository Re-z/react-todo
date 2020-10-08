import React from 'react';


export default props => {
	const liStyle = props.done ? {backgroundColor: 'green'} : {backgroundColor: 'red'};
	return (
		<li className="list-item" style={liStyle}>
			<span>{props.name}</span>
			<span>id: {props.id}</span>
			<span>
				<button onClick={props.switchStatus}>switch status</button>
				<button onClick={props.deleteItem}>close</button>
			</span>
		</li>
	)
}