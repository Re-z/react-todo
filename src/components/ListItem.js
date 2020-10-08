import React from "react";
import styles from "../styles/mystyles.module.css";

export const ListItem = (props) => {
	return (
		<li className={`list-item ${props.done ? styles.done : styles.notDone}`}>
			<span>{props.name}</span>
			<span>id: {props.id}</span>
			<span>
				<button onClick={props.switchStatus}>switch status</button>
				<button onClick={props.deleteItem}>close</button>
			</span>
		</li>
	);
};
