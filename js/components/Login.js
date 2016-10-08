import React from 'react';

let Login = React.createClass({ 

  	
  render() {
    return(
    	<div><div>Pollaroo</div><button id="fb_login" className="fbLoginBtn" onClick={this.loginHandler}>Login with Facebook</button></div>
    	);
  },

  loginHandler() {
       FB.init({
            appId      : '1191600797573080',
            status     : false, 
            cookie     : true,
            xfbml      : true,
            oauth      : true
        });
       document.getElementById('fb_login').onclick = function() {
           FB.login(function(response) {
			    if (response.authResponse) {
			    	//redirect 
			     console.log('Welcome!  Fetching your information.... ');
           document.fbAccess = response.authResponse.accessToken;
           document.fbUserId = response.authResponse.userID;
			     FB.api('/me', function(response) {
			       console.log('Good to see you, ' + response.name + '.');
			       window.location.hash = "poll"
			     });
			    } else {
			     console.log('User cancelled login or did not fully authorize.');
			    }
			}, {scope: 'user_friends'});
        }
    }

});

export default Login;  
