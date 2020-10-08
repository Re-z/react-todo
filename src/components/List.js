import React from 'react';
import ListItem from '../components/ListItem';

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
			inputValue: inputValue
		})
	}
	deleteItem = (el) => {
		const newItems = this.state.items.filter(item => item.id != el.id )
		this.setState({ items: newItems })
	}
	addItem = () => {
		if(this.state.inputValue) {
			const newItems = [...this.state.items];
			newItems.push({name: this.state.inputValue, done: false, id: Date.now()});
			this.setState({
				items: newItems,
				inputValue: ''
			})
		}
	}
	doneItems() { return this.state.items.filter(el =>  el.done === true) }
	todoItems() { return this.state.items.filter(el =>  el.done === false) }
	switchStatus = (el) => {
		const index = this.state.items.indexOf(el);
		const newItems = [...this.state.items];
		newItems[index].done = !newItems[index].done;
		this.setState({items: newItems}) //перерендеривается все items-ы? Есть более оптимальный способ
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
					{	//for loops?
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
						: (<div>There is no items TODO</div>)
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