React = require('react')
ReactDOM = require('react-dom')
Router = require('react-router')

Login = require('./components/Login.js')

App = React.createClass
  render: ->
	`<div className="nav">
		<Link to="app">Home</Link>
		<Link to="login">Login</Link>
	</div>`

ReactDOM.render <App /> , document.body

