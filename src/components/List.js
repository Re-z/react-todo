import React from 'react';
import {ListItem} from '../components/ListItem';

import '../styles/list.css';

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [{name: 'test name', done: false, id: Date.now() }],
			inputValue: '',
		}
	}
	setInputValue = (ev) => {
		const inputValue = ev.target.value;
		this.setState({
			inputValue
		})
	}
	deleteItem = (el) => {
		const newItems = this.state.items.filter(item => item.id != el.id )
		this.setState({ items: newItems })
	}
	addItem = () => {
		if(this.state.inputValue) {
			this.setState({
				items: [...this.state.items, {name: this.state.inputValue, done: false, id: Date.now()} ],
				inputValue: ''
			})
		}
	}
	doneItems() { return this.state.items.filter(el =>  el.done === true) }
	todoItems() { return this.state.items.filter(el =>  el.done === false) }
	switchStatus = (el) => {
		this.setState({items: this.state.items.map(item => {
			return item.id === el.id ? {...el, done: !el.done} : item;
		})})
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
					<button onClick={ this.addItem } className="list-btn">Add item</button>
				</div>
				<ul className="list-box">
					{	
						this.state.items.length
						? (this.state.items.map(el => {
								return (
									<ListItem
										key={el.id}
										id={el.id}
										name={el.name}
										done={el.done}
										deleteItem={() => this.deleteItem(el)}
										switchStatus={() => this.switchStatus(el)}
									/>
							)
						}))
						: (<>There is no items TODO</>)
					}
				</ul>
				<div>
					<p>Total items: {this.state.items.length}</p>
					<p>Done items: {this.doneItems().length}</p>
					<p>Todo items: {this.todoItems().length}</p>
				</div>
			</div>
			
		)
	}
}
export default List;