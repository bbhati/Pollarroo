import React from 'react'
import $ from 'jquery'
import polls from '../model/userPolls.json'

let Polls = React.createClass({
	getInitialState() {
		return  {data: []}
	},
	componentDidMount() {
		if(this.isMounted) {
			this.setState({data:polls.polls})	
		}
		
	},
	render() {
		return this.renderListItems()
	},
	renderListItems() {

		let rows = this.state.data.map ((datum, index) =>
			{
				let status = datum.results.status;
				let colorClass = "";
				let col = "";
				if(status == "complete") {
					col = <div  className="w3-col w3-container w3-green">{datum.question}</div>
				} else if (status == "pending") {
					col = <div ><div className="w3-col w3-container w3-yellow w3-rest">{datum.question}</div><div class="w3-col w3-container w3-yellow" style="width:20%"></div></div>				
				}
				return <div key={index} className="w3-row">{col}</div>})
			return <div>{rows}</div>



	}
})

export default Polls;

