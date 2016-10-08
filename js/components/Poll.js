import React from 'react'
import $ from 'jQuery'
import NavBar from './NavBarRC.js'

let Poll = React.createClass({
	
	getInitialState() {
		return {options: [], isTextEdit: true}
	},

	render() {
		return (
			<div className="fsContainer">{this.renderHeader()}<div className="polltext">{this.renderText()}</div>{this.renderOptions()}{this.renderOptionInput()}<button id="addOption" onClick={this.addOption}>Add Option</button>{this.renderToolBar()}</div>
			);
	},

	renderText() {
		if(this.state.isTextEdit)
			return <textarea defaultValue={this.state.polltext} onBlur={this.onTextBlur} ref={function(input) {if(input != null){input.focus()}}}/>
		else
			return <h4 onClick={this.togglePollTextEdit}>{this.state.polltext || "Enter Question"}</h4>
	},

	togglePollTextEdit() {
		this.setState({
			isTextEdit: !this.state.isTextEdit
		}) 
	},

	renderOptions() {
		let options = this.state.options.map( (option, idx) => {
			return <div className="optionRow"><div key={idx}>{option}</div></div>;
		});
		
		return <div key="op">{options}</div>
	},

	renderToolBar() {
		return <div className="w3-padding w3-xlarge w3-teal">
			<i className="fa fa-trash"></i>
			<i className="fa fa-share w3-large"></i></div>
	},

	renderHeader() {
		return <NavBar backHandler={this.backHandler} nextHandler={this.nextHandler}/>
	},

	renderOptionInput() {
		if(this.state.isOptionEdit)
			return <div><input onBlur={this.onBlur}/></div>
	},

	onTextBlur(event) {
		let text = event.target.value
		this.setState({
			polltext: text,
			isTextEdit: false
		})
	},

	onBlur(event) {
		let options = this.state.options
		options.push(event.target.value)
		this.setState({
			options: options,
			isOptionEdit: false
		})
	},

	addOption(){
		this.setState({isOptionEdit: true})
	},

	nextHandler() {
		window.location.hash = "participants"
	},

	backHandler() {
		window.location.hash = ""
	}

});

export default Poll;