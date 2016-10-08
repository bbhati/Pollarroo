import React from 'react'

let Suggestions = React.createClass({

	getInitialState() {
		return {selected: []}
	},

	render() {
		return <div className="suggestions">{this.renderTable()}</div>
	},

	renderTable() {
		let rows = this.props.data.map ((datum) => 
			{
				let className = "dataRow"
				if(this.isSelected(datum)){
					className += " selected"
				}	
				return <div className={className} key={datum} onClick={this.onClick} data-obj={datum}>{datum}</div>
			}
		)
		return <div className="rows">{rows}</div>
	},

	onClick(event) {
		const target = event.target
		const key = event.target.dataset.obj
		this.toggleSelected(key)
	},

	isSelected(data) {
		if(this.state.selected.indexOf(data) > -1) {
			return true
		}
	},

	toggleSelected(data) {
		const selected = this.state.selected
		const idx = selected.indexOf(data)
		if(idx< 0) {
			selected.push(data)	
		}
		else {
			selected.splice(idx, 1)
		}
		this.setState({selected: selected})
	},

	removeSelected(data) {
		const selected = this.state.selected
		
	}
})

export default Suggestions;