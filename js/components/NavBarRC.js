import React from 'react'

let NavBar = React.createClass({

	render () {
		return <div className="navBar w3-padding w3-large">
			<i className="fa fa-arrow-left" onClick={this.props.backHandler}>Back</i>
			<i className="fa fa-arrow-right" onClick={this.props.nextHandler}>Next</i></div>
	}

});

export default NavBar