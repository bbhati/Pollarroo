import React from 'react'
import Suggetions from './SuggestionsRC.js'


let SearchBar = React.createClass({

	getInitialState (){
		return {result: [], value: ""}

	},

	render () {
		let data = []
		if(this.state.value == ""){
			data = this.props.suggestions;
		} else 
		data = this.state.result
		return <div><div className="searchBar"><input className="searchInput" onChange={this.onChange}></input><i className="fa fa-search"></i><i className="fa fa-remove"></i></div><div className="result"><Suggetions data={data}/></div></div>
	},

	onChange (e) {
		//issue only one request in the span of one delay 
		clearTimeout(this.timer);
		const input = e.target.value
		this.setState({value: input});
		//issue request after timer
		this.timer = setTimeout ( () => this.autoComplete(), this.props.delay)
	},

	autoComplete () {
		//from list of friends search names
		let result = this.props.suggestions.filter( (name) => {if(name.toLowerCase().indexOf(this.normalizeInput()) > -1) { return true}})
		this.setState({
			result: result
		});
	},

	normalizeInput () {
		return this.state.value.toLowerCase().trim();
	}
})

export default SearchBar;