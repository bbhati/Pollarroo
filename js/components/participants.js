import React from 'react'
import SearchBar from './SearchBarRC.js'
import NavBar from './NavBarRC.js'

let Participants = React.createClass({

	getInitialState() {
		return {friends: []};
	},

	componentWillMount() {
		FB.api('/me/friends', (response) => {
			this.setState({
				friends: response.data
			});
		});
	},

	render() {
		let friends = this.state.friends.map ((friend) =>
			{ return friend.name } );
		return <div className="friendlists">{this.renderHeader()}<SearchBar delay="200" suggestions={friends}/></div>
	},

	nextHandler() {
		window.location.hash = "polls"
	},

	backHandler() {
		window.location.hash = "poll"
	},

	renderHeader () {
		return <NavBar nextHandler={this.nextHandler} backHandler={this.backHandler} />
	},
});

export default Participants;