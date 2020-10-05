import React from 'react';
import ListItem from '../components/ListItem';

import '../styles/list.css';

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [],
			inputValue: ''
		}
		this.deleteItem = this.deleteItem.bind(this)
		this.ItemsList = this.state.items.map(el => {
			return (
				<ListItem key={el} name={el} />
			)
		})
	}
	setInputValue = (ev) => {
		const inputValue = ev.target.value;
		this.setState({
			inputValue: inputValue
		})
	}
	deleteItem = () => {
		console.log(this);
	}
	addItem = () => {
		const newItems = [...this.state.items];
		newItems.push(this.state.inputValue);
		this.setState({
			items: newItems,
			inputValue: ''
		}, () => {
			//callback
		})
	}
	render() {
		return (
			<div className="list">
				<h1 className="list-title">React ToDo Application</h1>
				<div className="list-inputs">
					<input 
						className="list-input" 
						value={this.state.inputValue} 
						onChange={(ev) => this.setInputValue(ev)} 
						placeholder="type your item here" />
					<button onClick={this.addItem} className="list-btn">Add item</button>
				</div>
				<ul className="list-box">
					{
						this.state.items.map(el => {
							return (
								<ListItem key={el} name={el} deleteItem={this.deleteItem.bind(this)}/>
							)
						})
					}
				</ul>
			</div>
			
		)
	}
}
export default List;