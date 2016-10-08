import React from 'react';  
import ReactDOM from 'react-dom';
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import $ from 'jQuery';

import Login from './components/Login.js';
import Poll from './components/Poll.js';
import Participants from './components/participants.js';
import Polls from './components/polls.js';

let App = React.createClass({  
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link>
        <Link to="login">Login</Link>
      </div>
    );
  }
});

let navigated = function() {
  let hash = window.location.hash;
  hash = hash.substring(1)
  let component = <Login/>
  switch (hash) {
    case '\/':
    case '':
    component = <Login/>
    break;
    case 'poll':
    case 'poll/':
    component = <Poll/>
    break;
    case 'participants':
    case 'participants/':
    component = <Participants/>
    break;
    case 'polls':
    case 'polls/':
    component = <Polls/>
    break;
    default: 
    component = <div>Not found</div>  
  }
  
    ReactDOM.render((
      component
    ), document.getElementById("container"));
}

navigated();
window.addEventListener('hashchange', navigated, false);


